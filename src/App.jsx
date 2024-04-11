import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero";
import { ProductContainer } from "./components/Products/ProductContainer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductContainer />
      <Footer />
    </main>
  );
}

export default App;
