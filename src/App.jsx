import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero";
import { ProductContainer } from "./components/Products/ProductContainer";
import { CartProvider } from "./hooks/useCart";

function App() {
  return (
    <CartProvider>
      <main>
        <Cart />
        <Header />
        <Hero />
        <ProductContainer />
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;
