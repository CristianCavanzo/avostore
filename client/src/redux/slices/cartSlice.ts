import { CartReducer } from '@models/cart';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CartReducer = [];

const store = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const id = action.payload;
            const indexProduct = state.findIndex(
                (product) => product.id === id
            );
            console.log(indexProduct);
            if (indexProduct !== -1) {
                state[indexProduct] = {
                    id,
                    quantity: ++state[indexProduct].quantity,
                };
            } else {
                const newObjectCard = {
                    quantity: 0,
                    id,
                };
                state.push(newObjectCard);
            }
        },
    },
});

export default store.reducer;
export const { addToCard } = store.actions;
