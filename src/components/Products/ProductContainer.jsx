import { Product } from "./Product";
import { products } from "./products";

export const ProductContainer = () => {
  return (
    <div className="flex flex-wrap">
      {products.map((product) => {
        return <Product key={product.name} product={product} />;
      })}
    </div>
  );
};
