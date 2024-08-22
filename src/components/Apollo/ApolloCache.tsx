import { ApolloProvider } from "@apollo/client";
import { client } from "../../lib/apollo-client";
import Products from "./Products";
import { Suspense } from "react";

/* For detailed error message in dev */
// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// loadDevMessages();
// loadErrorMessages();
/**************************************/

const ApolloCache = () => {
    return (
        <ApolloProvider client={client}>
            {/* <Suspense
                fallback={
                    <div
                        style={{
                            color: "#ffffff",
                            textAlign: "center",
                            fontSize: "25px",
                            margin: "50px 0",
                        }}
                    >
                        Loading...
                    </div>
                }
            > */}
            <Products />
            {/* </Suspense> */}
        </ApolloProvider>
    );
};

export default ApolloCache;
