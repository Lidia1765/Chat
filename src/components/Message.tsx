import React from 'react';
import { InputChat } from './InputChat';
import { ChatWindow } from './ChatWindow';
import { messageSlice, addMessage, messageSliceReducer } from '../stores/message';
import type { Message, State } from '../stores/types';
import type { RootState } from '../stores/index';

type Props = {
    text: string
}

export function Message(props: Props) {

    return (
        <article>
            <p>
                {props.text}
            </p>
        </article>
    )
};