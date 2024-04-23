import { useCart } from "../../hooks/useCart";
import { Heading } from "../Heading/Heading";
import { Bag } from "./Bag";
import { Check } from "./Check";

export const Product = ({ product }) => {
  const cart = useCart();
  const color = product.available ? "text-black" : "text-agile-red";
  const disabled = cart.productIsInCart(product.name);
  const bagIcon = disabled ? "hidden" : "flex";
  const outOfStock = disabled ? "flex" : "hidden";

  const handleClick = () => {
    if (!disabled) {
      cart.addToCart(product);
    }
  };

  return (
    <div className="flex flex-col w-1/2 lg:w-1/4">
      <div className="relative group w-full h-full flex flex-col overflow-hidden">
        <img className="w-full h-full" src={product.image} alt={product.alt} />
        <div className="hidden lg:flex absolute w-full bottom-[-3rem] group-hover:bottom-0 transition-all bg-white p-4 justify-center items-center">
          <button
            className="w-full flex justify-center"
            onClick={handleClick}
            disabled={disabled}
          >
            <Bag visibility={bagIcon} />
            <Check visibility={outOfStock} />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 h-12 px-4 flex justify-end items-center lg:hidden">
          <button onClick={handleClick} disabled={disabled}>
            <Bag visibility={bagIcon} />
            <Check visibility={outOfStock} />
          </button>
        </div>
      </div>
      <div className="flex flex-col px-6 py-4 h-32 bg-white">
        <Heading size={"h3"}>{product.name}</Heading>
        <p className={`text-xs ${color} lg:text-sm`}>{product.description}</p>
      </div>
    </div>
  );
};
