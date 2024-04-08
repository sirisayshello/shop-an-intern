import { Product } from "./Product";
import { tech } from "./tech";

export const ProductContainer = () => {
  return (
    <div className="flex flex-wrap">
      {tech.map((techProduct) => {
        return (
          <Product
            key={techProduct.name}
            name={techProduct.name}
            description={techProduct.description}
          />
        );
      })}
    </div>
  );
};
