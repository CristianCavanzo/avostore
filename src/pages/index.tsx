import { apolloClient } from '@client';
import { Avocado as AvocadoComponent } from '@components/Cards';
import { AvocadoContainer } from '@components/views/Home/styled-components';
import { setAvocados } from '@redux/slices/avocadoSlice';
import { AppDispatch, RootState } from '@redux/store';
import { Avocado, GetAllAvocadosDocument } from '@service/graphql';
import { GetServerSideProps, InferGetServerSidePropsType, } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const getServerSideProps: GetServerSideProps<{
    products: Avocado[];
}> = async () => {
    const response = await apolloClient.query({
        query: GetAllAvocadosDocument,
        fetchPolicy: 'network-only',
    });
    if (!response.data.avos) {
        throw new Error('');
    }
    const products = response.data.avos as [];
    return {
        props: { products },
    };
};

const Home = ({
    products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const dispatch = useDispatch<AppDispatch>();
    const { avocados } = useSelector((state: RootState) => state.avocados);
    useEffect(() => {
        dispatch(setAvocados(products));
    }, []);
    return (
        <AvocadoContainer>
            {avocados.map((product) => (
                <AvocadoComponent
                    image={{ alt: product.name, src: product.image }}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                />
            ))}
        </AvocadoContainer>
    );
};

export default Home;
