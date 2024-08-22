import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./PLP.module.css";
import { products } from "src/utils/getProducts";

export default function PLP() {
  return (
    <main className={classes.main}>
      <header className={classes.header}></header>
      <aside></aside>
      <ul className={classes.products}>
        {products.map((product) => (
            <ProductCard product={product} key={product.name} />
        ))}
      </ul>
    </main>
  );
}
