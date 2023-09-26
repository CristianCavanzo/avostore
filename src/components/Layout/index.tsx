import { Navbar } from '@components/Navbar';
import { Montserrat } from 'next/font/google';
import { ContainerChildren } from './styled-components/containerChildren';

export const montserrat = Montserrat({
    weight: 'variable',
    subsets: ['latin'],
});

const Layout = ({ children }) => {
    return (
        <div className={montserrat.className}>
            <Navbar />
            <ContainerChildren>{children}</ContainerChildren>
            <footer>AvoStore</footer>
        </div>
    );
};

export { Layout };
