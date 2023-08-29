import { Navbar } from '@components/Navbar';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: 'variable',
    subsets: ['latin'],
});
const Layout = ({ children }) => {
    return (
        <div className={montserrat.className}>
            <Navbar />
            {children}
            <footer></footer>
        </div>
    );
};

export { Layout };
