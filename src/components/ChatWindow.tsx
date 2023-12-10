import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { InputChat } from './InputChat';
import { messageSlice, addMessage, messageSliceReducer } from '../stores/message';
import type { Message as MessageType, State } from '../stores/types';
import { Message } from './Message';
import type { RootState } from '../stores/index';
import OpenAI from 'openai';

curl https://api.openai.com/v1/chat/completions \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer org-Fe1llPEA1liDWSdCOzq1rla8' \
-d '{
'model': 'gpt-3.5-turbo',
    'messages': [{
        'role': 'system',
        'content': 'You will be provided with a message, and your task is to answer the question'
    }],
        'temperature': 0.7
    }'

export function ChatWindow() {
    const messages = useSelector<RootState, MessageType[]>(state => state.messages.messages);
    console.log(messages);
    const [loading, setLoading] = React.useState(true);

    const openai = new OpenAI({
        apiKey: process.env.org - Fe1llPEA1liDWSdCOzq1rla8
    });

    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                'role': 'system',
                'content': 'You will be provided with a message, and your task is to answer the question'
            }
        ],
        temperature: 0.8,
        max_tokens: 64,
        top_p: 1
    });

    React.useEffect(() => {
        const lastMessage = messages[messages.length - 1]
        if (lastMessage.type)
            fetch(response)
                .then(res => res.json())
                .then(json => (json.data))
                .catch(err => {
                    console.log(err),
                        alert(`Error: ${err.message}`)
                })
                .finally(() => setLoading(false))
    }, [messages])

    return (
        <ul className='ul'>
            {messages.map(({ text, id, author, type, date }) => (
                <li
                    className={type}
                    key={id}
                >
                    <Message
                        text={text} />
                </li>
            ))}
        </ul>
    )
};