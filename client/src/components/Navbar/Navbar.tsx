import { Avocado } from '@components/Cards';
import { AvocadoSVG, Basket } from '@components/SVGs';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';

const NavbarComponent = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 10;
    .navbar__containerUl {
        width: 100vw;
        box-shadow: 0 0 6px #000000ad;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;
            margin: 0 auto;
            width: 90%;

            background: white;
            li {
                list-style: none;
            }
            a {
                text-decoration: none;
            }
        }
    }
`;
const Content = styled.div`
    height: 80px;
`;
const Navbar = () => {
    return (
        <Fragment>
            <NavbarComponent>
                <div className="navbar__containerUl">
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
                </div>
            </NavbarComponent>
            <Content />
        </Fragment>
    );
};

export default Navbar;
