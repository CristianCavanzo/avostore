import { Product } from '@service/graphql';

export interface ProductSlice {
    products: Product[];
    product: Product | null;
}
