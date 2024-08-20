import React, { type FC } from "react";
import classes from "./ProductCard.module.css";
import type { Product } from "src/types/Product";
import { unstable_useViewTransitionState } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    product: { name, image, id },
  } = props;

  /* We'll use the same URL value for the Link and the hook */
  const pdpUrl = `product/${id}`;

  /* Check if the transition is running for the PDP URL */
  const isTransitioning = unstable_useViewTransitionState(pdpUrl);
  return (
    <div className={classes.card}>
      <img
        src={image}
        alt={name}
        style={{
          ...(isTransitioning && { viewTransitionName: "product-image" }),
        }}
      />
      <h3>{name}</h3>
      <p className={classes.price}>$279.99</p>
    </div>
  );
};

export default ProductCard;
