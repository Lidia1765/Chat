import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { InputChat } from './InputChat';
import { messageSlice, addMessage, messageSliceReducer } from '../stores/message';
import type { Message as MessageType, State } from '../stores/types';
import { Message } from './Message';
import type { RootState } from '../stores/index';
import { Loading } from './Loading';
import { openai } from '../openai';
import { createCurrentDate } from './helpers'

export function ChatWindow() {
    const messages = useSelector<RootState, MessageType[]>(state => state.messages.messages);
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (messages.length === 0) return
        const lastMessage = messages[messages.length - 1]
        if (lastMessage.type === 'user') {
            setLoading(true)
            openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        'role': 'user',
                        'content': lastMessage.text
                    }
                ],
            })
                .then((data) => {
                    console.log(data)
                    dispatch(addMessage({ text: data.choices[0].message.content, type: 'gpt', author: 'GTP 3.5', date: createCurrentDate() }));
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [messages]);

    return (
        <div>
            <ul className='ul'>
                {messages.map(({ text, id, author, type, date }) => (
                    <li
                        className={type}
                        key={id}
                    >
                        <Message
                            text={text}
                            author={author}
                            date={date}
                        />

                    </li>
                ))}
            </ul>
            {loading === true && <Loading />}
        </div>
    )
};