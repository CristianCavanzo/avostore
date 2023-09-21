import { CartReducer } from './cart';

export interface AppStore {
    cart: CartReducer;
    avocados: TProduct[];
}
