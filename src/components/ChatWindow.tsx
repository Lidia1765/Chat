import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { InputChat } from './InputChat';
import { messageSlice, addMessage, messageSliceReducer } from '../stores/message';
import type { Message as MessageType, State } from '../stores/types';
import { Message } from './Message';
import type { RootState } from '../stores/index';
import { Loading } from './Loading';
import { openai } from '../openai';

export function ChatWindow() {
    const messages = useSelector<RootState, MessageType[]>(state => state.messages.messages);
    //[loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();

    const messageDate = new Date();
    const messageDateTime = messageDate.toLocaleDateString() +
        ' в ' + messageDate.toLocaleTimeString();

    React.useEffect(() => {
        if (messages.length === 0) return
        const lastMessage = messages[messages.length - 1]
        if (lastMessage.type === 'user') {
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
                    dispatch(addMessage({ text: data.choices[0].message.content, type: 'gpt', author: 'GTP 3.5' }));
                })
                .finally(() => {
                    <Loading />
                })
        }
    }, [messages]);

    return (
        <ul className='ul'>
            {messages.map(({ text, id, author, type, date }) => (
                <li
                    className={type}
                    key={id}
                    title={author}
                >
                    {author}
                    <Message
                        text={text}
                    />
                    {messageDateTime}
                </li>
            ))}
        </ul>
    )
};