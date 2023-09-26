import { CartReducer } from '@models/cart';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CartReducer = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const id = action.payload;
            const indexProduct = state.findIndex(
                (product) => product.id === id
            );
            if (indexProduct !== -1) {
                state[indexProduct] = {
                    id,
                    quantity: ++state[indexProduct].quantity,
                };
            } else {
                const newObjectCard = {
                    quantity: 1,
                    id,
                };
                state.push(newObjectCard);
            }
        },
    },
});

export default cartSlice.reducer;
export const { addToCard } = cartSlice.actions;
