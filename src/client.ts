import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

const apiLink = createHttpLink({ uri: url });
const authLink = setContext(async (_, { headers }) => {
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('token');
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${token}`,
            },
        };
    }
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(apiLink),
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
