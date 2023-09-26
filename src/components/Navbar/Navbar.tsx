import { AvocadoSVG, Basket } from '@components/SVGs';
import { RootState } from '@redux/store';
import Link from 'next/link';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const NavbarComponent = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 10;
    background: white;
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
            .navbar__cart {
                display: flex;
                align-items: center;
                column-gap: 8px;
            }
        }
    }
`;

const Navbar = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
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
                        <li className="navbar__cart">
                            <Basket />
                            {quantity}
                        </li>
                    </ul>
                </div>
            </NavbarComponent>
        </Fragment>
    );
};

export default Navbar;
