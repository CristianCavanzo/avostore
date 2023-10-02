import { AvocadoSVG, Basket } from '@components/SVGs';
import { RootState } from '@redux/store';
import Link from 'next/link';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
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
            .navbar__cart-container {
                display: flex;
                align-items: center;
                column-gap: 16px;
            }
            a,
            .navbar__cart-profile {
                width: 32px;
                height: 32px;
                cursor: pointer;
            }
            .navbar__cart-items {
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
                            <div className="navbar__cart-container">
                                <Link href="/profile">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="#000"
                                        className="navbar__cart-profile"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </Link>

                                <div className="navbar__cart-items">
                                    <Basket />
                                    <span>{quantity}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </NavbarComponent>
        </Fragment>
    );
};

export default Navbar;
