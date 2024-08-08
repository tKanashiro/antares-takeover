import pkg from "@apollo/client";
const { ApolloClient, InMemoryCache, gql } = pkg;

const client = new ApolloClient({
    uri: "https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/graphql",
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
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
        `,
    })
    .then((result) => console.log(result));

export default client;
