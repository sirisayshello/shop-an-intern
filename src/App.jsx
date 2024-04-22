import { useEffect, useRef, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ProductContainer } from "./components/Products/ProductContainer";
import { CartProvider } from "./hooks/useCart";
import { BurgerMenu } from "./components/Menu/BurgerMenu";
import { Overlay } from "./components/Overlay/Overlay";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const footerRef = useRef();

  useEffect(() => {
    if (isOpen || hamburgerOpen) {
      setShowOverlay(true);
    } else {
      setTimeout(() => {
        setShowOverlay(false);
      }, 280);
    }
  }, [isOpen, hamburgerOpen]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const navAbout = () => {
    setHamburgerOpen(false);
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const closeMenus = () => {
    setHamburgerOpen(false);
    setIsOpen(false);
  };

  return (
    <CartProvider>
      <main>
        {showOverlay && (
          <Overlay
            fadeOut={!isOpen && !hamburgerOpen}
            closeMenus={closeMenus}
          />
        )}
        <BurgerMenu
          hamburgerOpen={hamburgerOpen}
          toggleHamburger={toggleHamburger}
          navAbout={navAbout}
        />
        <Cart isOpen={isOpen} toggleCart={toggleCart} />
        <Header
          toggleCart={toggleCart}
          toggleHamburger={toggleHamburger}
          navAbout={navAbout}
        />
        <Hero />
        <ProductContainer />
        <Footer ref={footerRef} />
      </main>
    </CartProvider>
  );
}

export default App;
