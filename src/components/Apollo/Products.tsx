import { useSuspenseQuery } from "@apollo/client";
import { GET_CATEGORIES } from "./query";
import {
    SortEnum,
    type GetCategoriesQuery,
    type GetCategoriesQueryVariables,
} from "src/generated/graphql";
import "./Product.css";

const variables = {
    productFilters: {
        category_uid: {
            eq: "MjE=",
        },
    },
    sort: {
        relevance: SortEnum.Asc,
    },
    pageSize: 12,
};

export default function Products() {
    const { data } = useSuspenseQuery<
        GetCategoriesQuery,
        GetCategoriesQueryVariables
    >(GET_CATEGORIES, {
        variables: variables,
    });

    const products = (data?.products && data.products.items) || [];

    return (
        <div className="body">
            {products && products?.length > 0 ? (
                products.map((item) => {
                    if (!item) return;

                    const isConfigurable =
                        item.__typename === "ConfigurableProduct";

                    const productName = item.name || "";

                    return (
                        <div className="card">
                            <div>
                                <div className="imageWrapper">
                                    {item.small_image?.url && (
                                        <img
                                            className="image"
                                            src={item.small_image.url}
                                            alt={productName}
                                        />
                                    )}
                                </div>
                                <p className="text">{productName}</p>
                            </div>
                            {isConfigurable && (
                                <p className="text moreOptions">
                                    See more options
                                </p>
                            )}
                        </div>
                    );
                })
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}
