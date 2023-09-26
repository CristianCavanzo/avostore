import { AvocadoSlice } from '@models/avocado';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: AvocadoSlice = {
    avocados: [],
    avocado: null,
};

export const getAvocados = createAsyncThunk(
    'avocados/getAvocados',
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
export const getAvocadoById = createAsyncThunk(
    'avocado/getByid',
    async (id: string, { dispatch }) => {
        const { data: response } = await axios(`/api/avos/${id}`);
        if (!response.error) {
            dispatch(setAvocado(response.data));
        }
    }
);

const avocadoSlice = createSlice({
    name: 'avocados',
    initialState,
    reducers: {
        setAvocados: (state, action) => {
            state.avocados.push(...action.payload);
        },
        setAvocado: (state, action) => {
            state.avocado = action.payload;
        },
    },
});
export default avocadoSlice.reducer;
export const { setAvocados, setAvocado } = avocadoSlice.actions;
