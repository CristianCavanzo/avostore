import { CartReducer } from '@models/cart';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CartReducer = {
    cart: [],
};

const store = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const existProduct = state.cart.findIndex(
                (product) => product.id === action.payload
            );
            if (existProduct && existProduct !== -1) {
                state[existProduct] = {
                    ...state[existProduct],
                    quantity: ++state[existProduct].quantity,
                };
            } else {
                action.payload.quantity = 0;
                state.cart.push(action.payload);
            }

            return action.payload;
        },
    },
});

export default store.reducer;
export const { addToCard } = store.actions;
