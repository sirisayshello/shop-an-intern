import { useCart } from "../../hooks/useCart";
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
        <div className="lg:w-1/3">
          <h1 className="text-3xl font-semibold">SIRI SJÖLIN</h1>
        </div>
        <div>
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
    </div>
  );
};
