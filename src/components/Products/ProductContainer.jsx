import { forwardRef } from "react";
import { Product } from "./Product";
import { products } from "./products";

export const ProductContainer = forwardRef((_, ref) => {
  return (
    <div className="flex flex-wrap pt-[124px]" ref={ref}>
      {products.map((product) => {
        return <Product key={product.name} product={product} />;
      })}
    </div>
  );
});
