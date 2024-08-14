import React from "react";
import pkg from "@apollo/client";
const { ApolloProvider, useQuery, gql } = pkg;
import { client } from "../lib/apollo-client";

const GET_COUNTRIES = gql`
    query getCountries {
        countries {
            two_letter_abbreviation
            full_name_english
            available_regions {
                code
                name
                id
            }
        }
    }
`;

const MyApp = () => {
    // const { data } = useQuery(GET_COUNTRIES);
    // if (data) console.log({ data });

    return (
        <ApolloProvider client={client}>
            <div>Test file</div>
        </ApolloProvider>
    );
};

export default MyApp;
