import { AvocadoSlice } from './avocado';
import { CartReducer } from './cart';

export interface AppStore {
    cart: CartReducer;
    avocados: AvocadoSlice;
}
