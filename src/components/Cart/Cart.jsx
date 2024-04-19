import { CartProduct } from "../Products/CartProduct";

export const Cart = () => {
  return (
    <div className="bg-red-300 z-20 fixed flex flex-col h-screen w-[min(480px,100vw)]">
      <div className="flex justify-between p-8">
        <p>CART</p>
        <button>CLOSE</button>
      </div>
      <div className="flex flex-col gap-4 p-8">
        <CartProduct />
        <CartProduct />
      </div>
      <div className="flex justify-between p-8">
        <p>TOTAL</p>
        <p>0 SEK</p>
      </div>
      <button>CHECKOUT</button>
    </div>
  );
};
