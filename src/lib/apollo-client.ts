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
        //             return `ProductInterface:${responseObject.sku}`;
        //         default:
        //             return defaultDataIdFromObject(responseObject);
        //     }
        // },
        // typePolicies: {
        //     ProductInterface: {
        //         fields: {
        //             locale: {
        //                 read: () => {
        //                     return localStorage.getItem("lang");
        //                 },
        //             },
        //         },
        //         keyFields: ["locale", "sku"],
        //     },
        // },
    }),
});

export default client;
