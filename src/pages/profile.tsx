import { useMutation } from '@apollo/client';
import { apolloClient } from '@client';
import { CreateAvoDocument } from '@service/graphql';
import axios from 'axios';
import { FormEvent, use, useEffect, useState } from 'react';

const Profile = () => {
    const [addAvocado, { data, loading }] = useMutation(CreateAvoDocument);
    console.log(data, loading);
    const [state, setState] = useState({
        token: '',
    });
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) setState({ ...state, token });
    }, []);
    const createAvo = async () => {
        addAvocado({
            variables: {
                avo: {
                    name: 'Maluma Hass Avocado2',
                    sku: 'NUR72KCM2',
                    price: 1.15,
                    image: '/images/maluma.jpg',
                    description:
                        'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
                    shape: 'Oval',
                    hardiness: '1 °C',
                    taste: 'Catchy, is an avocado',
                },
            },
        });
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const username = form.get('email');
        const password = form.get('password');
        try {
            console.log(username, password);
            const { data } = await axios({
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
                data: {
                    username,
                    password,
                },
            });
            sessionStorage.setItem('token', data.token);
            setState({ ...state, token: data.token });
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setState({ ...state, token: '' });
    };
    if (state.token)
        return (
            <div>
                <h3>Hola</h3>
                <button onClick={createAvo}>Agregar nuevo avocado</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">
                Nombre de usuario
                <input type="text" name="email" />
            </label>
            <label htmlFor="password">
                Contraseña
                <input type="password" name="password" />
            </label>
            <button>Ingresar</button>
        </form>
    );
};

export default Profile;
