interface Cart extends TProduct {
    quantity: number;
}
export interface CartReducer {
    cart: Cart[];
}
