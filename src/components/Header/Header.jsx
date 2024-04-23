import { useCart } from "../../hooks/useCart";
import { Heading } from "../Heading/Heading";
import { Hamburger } from "../Menu/Hamburger";
import { NavBarDesktop } from "../Menu/NavBarDesktop";
import { Bag } from "../Products/Bag";

export const Header = ({ toggleCart, toggleHamburger, navAbout }) => {
  const { numberOfProducts } = useCart();

  return (
    <div className="fixed w-full z-10">
      <div className="flex justify-between items-center p-6 bg-white">
        <Hamburger onClick={toggleHamburger} />
        <div className="hidden lg:flex lg:w-1/3">
          <NavBarDesktop visibility={"hidden lg:flex"} navAbout={navAbout} />
        </div>
        <div className="flex lg:w-1/3 lg:justify-center">
          <Heading size="h1">SIRI SJÖLIN</Heading>
        </div>
        <div className="lg:w-1/3 flex justify-end">
          <button onClick={toggleCart}>
            <span className="flex">
              <Bag large visibility={"lg:hidden"} />
              <span className="lg:hidden w-[22px] h-[28px] absolute text-xs flex justify-center items-end">
                {numberOfProducts}
              </span>
              <span className="hidden lg:flex">CART ({numberOfProducts})</span>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap bg-agile-red whitespace-nowrap">
        <div className="flex flex-nowrap text-white py-2 px-8 gap-48 animate-infinite-scroll">
          <p>ALL PRODUCTS 0 SEK</p>
          <p>INTERNSHIP SALE</p>
        </div>
        <div className="flex flex-nowrap text-white py-2 px-8 gap-48 animate-infinite-scroll">
          <p>ALL PRODUCTS 0 SEK</p>
          <p>INTERNSHIP SALE</p>
        </div>
        <div className="flex flex-nowrap text-white py-2 px-8 gap-48 animate-infinite-scroll">
          <p>ALL PRODUCTS 0 SEK</p>
          <p>INTERNSHIP SALE</p>
        </div>
        <div className="flex flex-nowrap text-white py-2 px-8 gap-48 animate-infinite-scroll">
          <p>ALL PRODUCTS 0 SEK</p>
          <p>INTERNSHIP SALE</p>
        </div>
      </div>
    </div>
  );
};
