import { Layout } from '@components/Layout';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '@styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    );
}
