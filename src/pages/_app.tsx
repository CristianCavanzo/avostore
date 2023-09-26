import { Layout } from '@components/Layout';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '@styles/global.css';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <Fragment>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Fragment>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
