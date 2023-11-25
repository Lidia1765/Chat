import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "./InputChat";
import { FormEvent } from 'react';
import { addMessage } from './Message';
import React from 'react';

export function ChatWindow() {
    const [messageInput, setMessageInput] = React.useState('');
    const todos = useSelector<RootState>;
    const dispatch = useDispatch()

    const sentMessage = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addMessage({ text: messageInput }));
        setMessageInput('');
    }
};