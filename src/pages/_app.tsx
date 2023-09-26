import { Layout } from '@components/Layout';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '@styles/global.css';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Fragment>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Fragment>
        </Provider>
    );
}
