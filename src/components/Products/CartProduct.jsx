import { Heading } from "../Heading/Heading";
import { CloseButton } from "../Menu/CloseButton";

export const CartProduct = ({ product, removeFromCart }) => {
  const handleCLick = () => {
    removeFromCart(product.name);
  };
  return (
    <div className="flex pb-4">
      <img className="w-28" src={product.image} alt="" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex pl-4 justify-between">
          <Heading size="h3">{product.name}</Heading>
          <button aria-label={`remove ${product.name}`} onClick={handleCLick}>
            <CloseButton />
          </button>
        </div>
        <div className="flex justify-end bottom-0">
          <p>0 SEK</p>
        </div>
      </div>
    </div>
  );
};
