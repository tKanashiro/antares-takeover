import React from "react";
import ProductCard7 from "../ProductCard/ProductCard7";
import classes from "./PLP7.module.css";
import { products } from "src/utils/getProducts";

export default function PLP7() {
    return (
        <main className={classes.main}>
            <header className={classes.header}></header>
            <aside></aside>
            <ul className={classes.products}>
                {products.map((product) => (
                    <ProductCard7 product={product} key={product.name} />
                ))}
            </ul>
        </main>
    );
}
