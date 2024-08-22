import React from "react";
import ProductCard0 from "../ProductCard/ProductCard0";
import classes from "./PLP0.module.css";
import { products } from "src/utils/getProducts";

export default function PLP0() {
  return (
    <main className={classes.main}>
      <header className={classes.header}></header>
      <aside></aside>
      <ul className={classes.products}>
        {products.map((product) => (
            <ProductCard0 product={product} key={product.name} />
        ))}
      </ul>
    </main>
  );
}
