import { Avocado } from '@components/Cards';
import { AvocadoContainer } from '@components/views/Home/styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
interface State {
    avos: TProduct[];
}
const Home = () => {
    const [state, setState] = useState<State>({ avos: [] });
    useEffect(() => {
        (async () => {
            const { data: response } = await axios('/api/avos');
            if (!response.error) {
                setState({
                    ...state,
                    avos: response.data,
                });
            }
        })();
    }, []);

    return (
        <AvocadoContainer>
            {state.avos.map((avo) => (
                <Avocado
                    image={{ alt: avo.name, src: avo.image }}
                    key={avo.id}
                    name={avo.name}
                    price={avo.price}
                />
            ))}
        </AvocadoContainer>
    );
};

export default Home;
