import { useQuery, useSuspenseQuery } from "@apollo/client";
import { GET_CATEGORIES } from "./query";
import { Suspense, useMemo } from "react";
import "./Product.css";

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
    pageSize: 12,
};

export default function Products() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("lang");
    console.log({ myParam });
    localStorage.setItem("lang", `${myParam}`);
    const { data } = useQuery(GET_CATEGORIES, {
        variables: variables,
    });

    // const { data } = useSuspenseQuery(GET_CATEGORIES, {
    //     variables: variables,
    // });

    const products = useMemo(() => {
        if (!data) return;

        return data.products.items;
    }, [data]);

    if (data) console.log({ data, products });

    if (!products) return <div>Loading...</div>;

    return (
        // <Suspense fallback={<div>Loading...</div>}>
        //     {products.length > 0 &&
        //         products.map((item) => {
        //             return <p>Test: {item.name}</p>;
        //         })}
        // </Suspense>

        <div className="body">
            {products.length > 0 &&
                products.map((item) => {
                    const { small_image, name, __typename } = item;

                    const isConfigurable = __typename === "ConfigurableProduct";

                    return (
                        <div className="card">
                            <div>
                                <div className="imageWrapper">
                                    <img
                                        className="image"
                                        src={small_image.url}
                                        alt={name}
                                    />
                                </div>
                                <p className="text">{name}</p>
                            </div>
                            {isConfigurable && (
                                <p className="text moreOptions">
                                    See more options
                                </p>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}
