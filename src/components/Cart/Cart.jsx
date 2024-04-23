import { CartProduct } from "../Products/CartProduct";
import { useCart } from "../../hooks/useCart";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { Heading } from "../Heading/Heading";
import { Confirmation } from "./Confirmation";
import { Checkout } from "./Checkout";

export const Cart = ({ isOpen, toggleCart }) => {
  const { cart, removeFromCart, numberOfProducts } = useCart();
  const position = isOpen ? "right-0" : "-right-[480px]";
  const emptyCart = numberOfProducts === 0;
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (numberOfProducts === 0) {
      setShowCheckout(false);
      setShowConfirmation(false);
    }
  }, [numberOfProducts]);

  return (
    <div
      className={`bg-white z-20 fixed flex flex-col h-dvh w-[min(480px,100vw)] ${position} transition-all ease-in duration-300`}
    >
      <div className="flex justify-between p-6 border-b-[1px] border-black">
        <p>CART ({numberOfProducts})</p>
        <button onClick={toggleCart}>CLOSE</button>
      </div>
      {emptyCart && (
        <div className="flex justify-center items-center w-full h-full">
          <Heading size={"h2"}>CART IS EMPTY</Heading>
        </div>
      )}
      <div className="flex flex-col gap-4 p-6 overflow-y-scroll no-scrollbar">
        {cart.map((product) => {
          return (
            <CartProduct
              key={`cart-${product.name}`}
              product={product}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
      {!emptyCart && !showCheckout && (
        <div className="flex flex-col gap-4 p-6 border-t-[1px] border-black">
          <p className="text-xs">Estimated arrival on: November 25 2024</p>
          <div className="flex justify-between">
            <label>TOTAL</label>
            <p>0 SEK</p>
          </div>
          <Button
            onClick={() => {
              setShowCheckout(true);
            }}
            text={"CHECKOUT"}
          />
        </div>
      )}
      {showCheckout && !showConfirmation && (
        <Checkout
          onSubmit={() => {
            setShowConfirmation(true);
          }}
        />
      )}
      {showConfirmation && <Confirmation />}
    </div>
  );
};
