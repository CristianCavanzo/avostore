import { Navbar } from '@components/Navbar';
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
        <div>
            <Navbar />
            <div>
                {state.avos.map((avo) => (
                    <div key={avo.id}>{avo.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Home;
