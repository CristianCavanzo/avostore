import { Layout } from '@components/Layout';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '@styles/global.css';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={}>
            <Fragment>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Fragment>
        </Provider>
    );
}
