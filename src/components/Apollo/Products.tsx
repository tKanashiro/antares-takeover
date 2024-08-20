import { gql, useQuery } from "@apollo/client";

const variables = {
    currentPage: 1,
    productFilters: {
        category_uid: {
            eq: "MjE=",
        },
    },
    sort: {
        relevance: "DESC",
    },
    pageSize: 24,
};

const GET_CATEGORIES = gql`
    query getCategories(
        $productFilters: ProductAttributeFilterInput
        $pageSize: Int
        $currentPage: Int
        $sort: ProductAttributeSortInput
    ) {
        products(
            pageSize: $pageSize
            currentPage: $currentPage
            filter: $productFilters
            sort: $sort
        ) {
            items {
                name
                id
                sku
                media_gallery_entries {
                    id
                    label
                    position
                    disabled
                    file
                }
                ... on ConfigurableProduct {
                    configurable_options {
                        attribute_code
                        attribute_id
                        id
                        label
                        values {
                            default_label
                            label
                            store_label
                            use_default_value
                            value_index
                            swatch_data {
                                ... on ImageSwatchData {
                                    thumbnail
                                }
                                value
                            }
                        }
                    }
                    variants {
                        attributes {
                            code
                            value_index
                        }
                        product {
                            id
                            categories {
                                id
                                breadcrumbs {
                                    category_id
                                    category_name
                                }
                                name
                                level
                            }
                            media_gallery_entries {
                                id
                                disabled
                                file
                                label
                                position
                            }
                            sku
                            stock_status
                        }
                    }
                }
            }
        }
    }
`;

export default function Products() {
    const { data } = useQuery(GET_CATEGORIES, {
        variables: variables,
    });

    if (data) console.log({ data });

    return <p>{JSON.stringify(data)}</p>;
}
