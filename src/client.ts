import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
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
