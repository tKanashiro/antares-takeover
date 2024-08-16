import { ApolloProvider } from "@apollo/client";
import { client } from "../../lib/apollo-client";
import Products from "./Products";

/* For detailed error message in dev */
// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// loadDevMessages();
// loadErrorMessages();
/**************************************/

const ApolloMain = () => {
    return (
        <ApolloProvider client={client}>
            <Products />
        </ApolloProvider>
    );
};

export default ApolloMain;
