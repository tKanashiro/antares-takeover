import React, { type FC } from "react";
import classes from "./ProductCard0.module.css";
import type { Product } from "src/types/Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard0: FC<ProductCardProps> = (props) => {
  const {
    product: { name, image, id, price, salePrice },
  } = props;

  const pdpUrl = `product/${id}`;
  return (
      <li className={classes.productCard}>
          <img
              src={image}
              alt={name}
          />
          <h3>{name}</h3>
          <div className={classes.rating}>⭐⭐⭐⭐⭐</div>
          <div className={classes.price}>
              ${price}
              <div className={classes.salePrice}>{price !== salePrice ? `$${salePrice}` : ''}</div>
          </div>
          <Link to={pdpUrl} className={classes.shopNow}>Shop now</Link>
      </li>
  );
};

export default ProductCard0;
