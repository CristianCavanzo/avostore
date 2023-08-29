import Link from 'next/link';
import styled from 'styled-components';

const NavbarComponent = styled.nav`
    width: 100%;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 90%;
        padding: 8px 12px;
        li {
            list-style: none;
        }
        a {
            text-decoration: none;
        }
    }
`;
const Navbar = () => {
    return (
        <NavbarComponent>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </NavbarComponent>
    );
};

export default Navbar;
