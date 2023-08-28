import { Navbar } from '../Navbar';
import React, { Fragment } from 'react';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            {children}
            <footer></footer>
        </Fragment>
    );
};

export { Layout };
