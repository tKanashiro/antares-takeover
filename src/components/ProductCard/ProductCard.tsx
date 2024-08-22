import React, { type FC } from "react";
import classes from "./ProductCard.module.css";
import type { Product } from "src/types/Product";
import { Link,
    // unstable_useViewTransitionState
} from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    product: { name, image, id, price, salePrice },
  } = props;

  const pdpUrl = `product/${id}`;
  // const isTransitioning = unstable_useViewTransitionState(pdpUrl);
  return (
      <li className={classes.productCard}>
          <img
              src={image}
              alt={name}
              // style={{
              //     ...(isTransitioning && {viewTransitionName: "product-image"}),
              // }}
          />
          <h3>{name}</h3>
          <div className={classes.rating}>⭐⭐⭐⭐⭐</div>
          <div className={classes.price}>
              ${price}
              <div className={classes.salePrice}>{price !== salePrice ? `$${salePrice}` : ''}</div>
          </div>
          <Link to={pdpUrl} className={classes.shopNow}
                // unstable_viewTransition
          >Shop now</Link>
      </li>
  );
};

export default ProductCard;
