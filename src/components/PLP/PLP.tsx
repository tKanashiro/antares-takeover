import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./PLP.module.css";
import { products } from "src/utils/getProducts";
import { Link } from "react-router-dom";

export default function PLP() {
  return (
    <main className={classes.main}>
      <header></header>
      <aside></aside>
      <ul className={classes.products}>
        {products.map((product) => (
          <li key={product.name}>
            <Link to={`/product/${product.id}`} unstable_viewTransition>
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
