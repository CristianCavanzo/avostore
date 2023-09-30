import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@client';
import { Layout } from '@components/Layout';
import { store } from '@redux/store';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <Fragment>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Fragment>
            </Provider>
        </ApolloProvider>
    );
}
