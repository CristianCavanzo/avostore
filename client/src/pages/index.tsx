import { Avocado } from '@components/Cards';
import { AvocadoContainer } from '@components/views/Home/styled-components';
import { AppStore } from '@models/store';
import { getAvocados } from '@redux/slices/avocadoSlice';
import { AppDispatch, RootState } from '@redux/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const avocados = useSelector((state: RootState) => state.avocados);

    useEffect(() => {
        dispatch(getAvocados());
    }, []);

    return (
        <AvocadoContainer>
            {avocados.map((avo) => (
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
