import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: TProduct[] = [];

export const getAvocados = createAsyncThunk(
    'avocados/fetch',
    async (_, { dispatch }) => {
        try {
            const { data: response } = await axios('/api/avos');
            if (!response.error) {
                dispatch(setAvocados(response.data));
            }
        } catch (error) {
            console.log(error);
        }
    }
);

const avocadoSlice = createSlice({
    name: 'avocados',
    initialState,
    reducers: {
        setAvocados: (state, action) => {
            state.push(...action.payload);
        },
    },
});
export default avocadoSlice.reducer;
export const { setAvocados } = avocadoSlice.actions;
