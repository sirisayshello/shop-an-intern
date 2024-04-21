import { CartProduct } from "../Products/CartProduct";
import { useCart } from "../../hooks/useCart";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";

export const Cart = ({ isOpen, toggleCart }) => {
  const { cart, removeFromCart, numberOfProducts } = useCart();
  const position = isOpen ? "right-0" : "-right-[480px]";
  const emptyCart = numberOfProducts === 0;
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (numberOfProducts === 0) {
      setShowCheckout(false);
    }
  }, [numberOfProducts]);

  return (
    <div
      className={`bg-white z-20 fixed flex flex-col h-screen w-[min(480px,100vw)] ${position} transition-all ease-in duration-300`}
    >
      <div className="flex justify-between p-6 border-b-[1px] border-black">
        <p>CART ({numberOfProducts})</p>
        <button onClick={toggleCart}>CLOSE</button>
      </div>
      {emptyCart && (
        <div className="flex justify-center items-center w-full h-full">
          <h2>CART IS EMPTY</h2>
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
      {showCheckout && (
        <div className="p-6 flex flex-col gap-4 border-t-[1px] border-black">
          <h2>CHOOSE PAYMENT</h2>
          <form className="flex flex-col gap-4" action="">
            <div className="flex gap-4">
              <label for="coffee">COFFEE</label>
              <input type="checkbox" name="coffee" value="cofee" />
            </div>
            <div className="flex gap-4">
              <label for="encouragement">ENCOURAGEMENT</label>
              <input
                type="checkbox"
                name="encouragement"
                value="encouragement"
              />
            </div>
            <div className="flex gap-4">
              <label for="highfives">HIGH-FIVES</label>
              <input type="checkbox" name="highfives" value="highfives" />
            </div>
            <div className="flex gap-4">
              <label for="endlessgratitude">ENDLESS GRATITUDE</label>
              <input
                type="checkbox"
                name="endlessgratitude"
                value="endlessgratitude"
              />
            </div>
            <div className="flex gap-4">
              <label for="knowledge">KNOWLEDGE</label>
              <input type="checkbox" name="knowledge" value="knowledge" />
            </div>
          </form>
          <div className="flex justify-between">
            <label>TOTAL</label>
            <p>0 SEK</p>
          </div>
          <a href="mailto:siri.sjolin@hotmail.com">
            <Button text={"PLACE ORDER"} />
          </a>
        </div>
      )}
    </div>
  );
};
