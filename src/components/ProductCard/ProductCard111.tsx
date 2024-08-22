import React, { type FC } from "react";
import classes from "./ProductCard.module.css";
import type { Product } from "src/types/Product";
import {Link, unstable_useViewTransitionState} from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard111: FC<ProductCardProps> = (props) => {
  const {
    product: { name, image, id, price, salePrice },
  } = props;

  /* We'll use the same URL value for the Link and the hook */
  const pdpUrl = `product/${id}`;

  /* Check if the transition is running for the PDP URL */
  const isTransitioning = unstable_useViewTransitionState(pdpUrl);
  return (
      <li className={classes.card}>
          <img
              src={image}
              alt={name}
              style={{
                  ...(isTransitioning && {viewTransitionName: "product-image"}),
              }}
          />
          <h3>{name}</h3>
          <div className={classes.rating}>⭐⭐⭐⭐⭐</div>
          <div className={classes.price}>
              ${price}
              <div className={classes.salePrice}>{price !== salePrice ? `$${salePrice}` : ''}</div>
          </div>
          <Link to={pdpUrl} unstable_viewTransition className={classes.shopNow}>Shop now</Link>
      </li>
  );
};

export default ProductCard111;
