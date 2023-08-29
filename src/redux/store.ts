import { AppStore } from '@models/store';
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices';

const store = configureStore<AppStore>({
    reducer: {
        cart: cartSlice,
    },
});
