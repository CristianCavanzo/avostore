import { Avocado } from '@components/Cards';
import { AvocadoContainer } from '@components/views/Home/styled-components';
import { getAvocados } from '@redux/slices/avocadoSlice';
import { AppDispatch, RootState } from '@redux/store';
import { ProductApi } from '@utilities/ProductApi';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const avocados = useSelector((state: RootState) => state.avocados);
    const productApi = new ProductApi();
    const foo = useQuery('avocados', async () => {
        const response = await productApi.getProducts();
        return response;
    });
    console.log(foo);
    useEffect(() => {
        dispatch(getAvocados());
    }, []);

    return (
        <AvocadoContainer>
            {avocados.avocados.map((avo) => (
                <Avocado
                    image={{ alt: avo.name, src: avo.image }}
                    key={avo.id}
                    name={avo.name}
                    price={avo.price}
                    id={avo.id}
                />
            ))}
        </AvocadoContainer>
    );
};

export default Home;
