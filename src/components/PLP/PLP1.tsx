import React from "react";
import ProductCard1 from "../ProductCard/ProductCard1";
import classes from "./PLP0.module.css";
import { products } from "src/utils/getProducts";

export default function PLP1() {
  return (
    <main className={classes.main}>
      <header className={classes.header}></header>
      <aside></aside>
      <ul className={classes.products}>
        {products.map((product) => (
            <ProductCard1 product={product} key={product.name} />
        ))}
      </ul>
    </main>
  );
}
