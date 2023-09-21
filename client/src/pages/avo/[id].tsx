import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Avocado = () => {
    const {
        query: { id },
    } = useRouter();
    useEffect(() => {
        (async () => {
            const { data } = await axios({});
        })();
    });
    return <div></div>;
};

export default Avocado;
