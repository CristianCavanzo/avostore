import { Avocado } from '@components/Cards';
import { AvocadoSVG, Basket } from '@components/SVGs';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';

const NavbarComponent = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 10;
    padding: 20px 0;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 90%;
        padding: 8px 20px;
        margin: 0 auto;
        box-shadow: 0 0 6px #000000ad;
        border-radius: 1000px;
        background: white;
        li {
            list-style: none;
        }
        a {
            text-decoration: none;
        }
    }
`;
const Content = styled.div`
    height: 100px;
`;
const Navbar = () => {
    return (
        <Fragment>
            <NavbarComponent>
                <ul>
                    <li>
                        <Link href="/">
                            <AvocadoSVG width={40} />
                        </Link>
                    </li>
                    <li>
                        <Basket />
                    </li>
                </ul>
            </NavbarComponent>
            <Content />
        </Fragment>
    );
};

export default Navbar;
