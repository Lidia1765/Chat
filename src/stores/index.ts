import { configureStore } from '@reduxjs/toolkit';
import { messageSliceReducer } from './message';

export const store = configureStore({
    reducer: {
        messages: messageSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;