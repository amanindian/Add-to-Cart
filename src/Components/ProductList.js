import Product from "./Product";
import React from "react";

export default function ProductList({
  Products,
  decrementQuantity,
  incrimentQuantity,
  deleteProduct,
}) {
  return Products.map((product, i) => {
    return (
      <Product
        incrimentQuantity={incrimentQuantity}
        decrementQuantity={decrementQuantity}
        Products={Products}
        product={product}
        index={i}
        key={i}
        deleteProduct={deleteProduct}
      />
    );
  });
}
