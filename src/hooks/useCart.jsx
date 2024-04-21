import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const numberOfProducts = cart.length;
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productName) => {
    const filteredCart = cart.filter((product) => productName !== product.name);
    setCart(filteredCart);
  };
  const productIsInCart = () => {};
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        productIsInCart,
        numberOfProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
