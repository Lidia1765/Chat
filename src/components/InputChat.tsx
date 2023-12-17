import React from "react";
import { useDispatch } from 'react-redux';
import { FormEvent } from 'react';
import { addMessage } from '../stores/message';
import { createCurrentDate } from './helpers'


export function InputChat() {
    const [messageInput, setMessageInput] = React.useState('');
    const dispatch = useDispatch();



    const sentMessage = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addMessage({ text: messageInput, type: 'user', author: 'User', date: createCurrentDate() }));
        setMessageInput('');
    }

    return (
        <form
            onSubmit={sentMessage}
            className="form">
            <input
                className="input"
                type="text"
                placeholder="Введите текст"
                value={messageInput}
                onInput={(e) => { setMessageInput((e.target as HTMLInputElement).value) }}
            />
            <button type="submit">
                Отправить
            </button>
        </form>
    )
}
