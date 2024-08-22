import React from "react";
import ProductCard4 from "../ProductCard/ProductCard4";
import classes from "./PLP0.module.css";
import { products } from "src/utils/getProducts";

export default function PLP4() {
    return (
        <main className={classes.main}>
            <header className={classes.header}></header>
            <aside></aside>
            <ul className={classes.products}>
                {products.map((product) => (
                    <ProductCard4 product={product} key={product.name} />
                ))}
            </ul>
        </main>
    );
}
