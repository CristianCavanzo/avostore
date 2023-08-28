import { useRouter } from 'next/router';

const Product = () => {
    const {
        query: { id },
    } = useRouter();
    return <div>Esta es la prueba de los producto {id}</div>;
};

export default Product;
