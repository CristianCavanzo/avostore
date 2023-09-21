import { AppStore } from '@models/store';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import avocadoSlice from './slices/avocadoSlice';

export const store = configureStore<AppStore>({
    reducer: {
        cart: cartSlice,
        avocados: avocadoSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
