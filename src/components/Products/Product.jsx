import { useCart } from "../../hooks/useCart";
import { Bag } from "./Bag";

export const Product = ({ product }) => {
  const cart = useCart();
  const handleClick = () => {
    cart.addToCart(product);
  };
  console.log(cart);
  return (
    <div className="flex flex-col pb-4 w-1/2 lg:w-1/4">
      <div className="relative group w-full h-full flex flex-col overflow-hidden">
        <img className="w-full h-full" src={product.image} alt={product.alt} />
        <div className="hidden [@media(hover:hover)]:flex absolute w-full bottom-[-3rem] group-hover:bottom-0 transition-all bg-white p-4 justify-center items-center">
          <button onClick={handleClick}>
            <Bag />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 h-12 px-4 flex justify-end items-center [@media(hover:hover)]:hidden">
          <button onClick={handleClick}>
            <Bag />
          </button>
        </div>
      </div>
      <div className="flex flex-col p-4 h-32 bg-white">
        <h3>{product.name}</h3>
        <p className="text-xs text-gray-600 lg:text-base">
          {product.description}
        </p>
      </div>
    </div>
  );
};
