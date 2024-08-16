import { gql, useQuery } from "@apollo/client";

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

export default function Products() {
    const { data } = useQuery(GET_COUNTRIES);

    if (data) console.log({ data });

    return <p>{JSON.stringify(data)}</p>;
}
