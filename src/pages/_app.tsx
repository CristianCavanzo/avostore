import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Layout } from '@components/Layout';
import { store } from '@redux/store';
import '@styles/global.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { Provider } from 'react-redux';

const apolloClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    products: {
                        read(existing, { args, toReference }) {
                            return toReference({
                                __typename: 'Product',
                                id: args?.id,
                            });
                        },
                    },
                },
            },
        },
    }),
});

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
