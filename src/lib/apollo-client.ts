import {
    ApolloClient,
    defaultDataIdFromObject,
    InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/graphql",
    cache: new InMemoryCache({
        // dataIdFromObject(responseObject) {
        //     switch (responseObject.__typename) {
        //         case "ConfigurableProduct":
        //         case "SimpleProduct":
        //             return `ProductInterface:${responseObject.id}`;
        //         default:
        //             return defaultDataIdFromObject(responseObject);
        //     }
        // },
        // typePolicies: {
        //     ConfigurableProduct: {
        //         keyFields: ["sku"],
        //     },
        // },
    }),
});

export default client;
