import type { State } from './types';
import { createSlice } from "@reduxjs/toolkit";

const initialState: State = { count: 0, messages: [] }

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducer: {
        addMessage: (state, action) => {
            state.count = state.count + 1;
            state.messages = [{ text: action.payload.text, id: crypto.randomUUID() }, ...state.messages];
        }
    }
});

export const { addMessage } = messageSlice.actions
export const messageSliceReducer = messageSlice.reducer