import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import { messageSliceReducer } from './Message'

type Message = {
    type: 'sent' | 'received',
    author: string,
    text: string,
    date: string
}

export type RootState = ReturnType<typeof store.getState>;

export function InputChat() {
    const [input, setInput] = React.useState('');
    const [answer, setAnswer] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const store = configureStore({
        reducer: {
            messages: messageSliceReducer
        }
    });

    React.useEffect(() => {
        if (Message.type.sent)
            fetch('https://explain-ai-chatbot-81517f.zapier.app/explainai-chatbot')
                .then(res => res.json())
                .then(json => setAnswer(json.data))
                .catch(err => {
                    console.log(err),
                        alert(`Error: ${err.message}`)
                })
                .finally(() => setLoading(false))
    }, [messages])

    return (
        <form>
            <input
                className="input"
                type="text"
                placeholder="Введите текст"
                value={input}
                onInput={(e) => { setInput((e.target as HTMLInputElement).value) }}
            />
            <button type="submit">
                Отправить
            </button>
        </form>
    )
}
