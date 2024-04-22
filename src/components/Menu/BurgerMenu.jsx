import { useRef } from "react";
import { CloseButton } from "./CloseButton";
import { Heading } from "../Heading/Heading";

export const BurgerMenu = ({ hamburgerOpen, toggleHamburger, navAbout }) => {
  const position = hamburgerOpen ? "left-0" : "-left-[480px]";

  return (
    <div
      className={`bg-white z-20 top-0 fixed flex flex-col h-screen w-[min(480px,100vw)] ${position} transition-all ease-in duration-300`}
    >
      <div className="p-6 border-b-[1px] border-black">
        <button>
          <CloseButton large onClick={toggleHamburger} />
        </button>
      </div>
      <div className="">
        <nav>
          <ul className="flex flex-col">
            <li>
              <div className="border-b-[1px] border-black p-6">
                <a
                  className="hover:text-black/50"
                  href="https://github.com/sirisayshello"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </li>
            <li>
              <div className="border-b-[1px] border-black p-6">
                <a
                  className="hover:text-black/50"
                  href="https://www.linkedin.com/in/siri-sj%C3%B6lin-89481417b/"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </div>
            </li>
            <li>
              <div className="border-b-[1px] border-black p-6">
                <p
                  onClick={navAbout}
                  className="hover:text-black/50 hover:cursor-pointer"
                >
                  ABOUT
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="overflow-y-scroll no-scrollbar">
        <div className="bg-[url('../public/assets/img/lia.png')] bg-cover h-64">
          <Heading size="h3">LIA EXPRESS</Heading>
          <Heading size="h4">Platform for intern-company connections</Heading>
        </div>
        <div className="bg-[url('../public/assets/img/cat.png')] bg-cover h-64">
          <Heading size="h3">PAT THE CAT</Heading>
          <Heading size="h4">A useless website</Heading>
        </div>
        <div className="bg-[url('../public/assets/img/belmond.png')] bg-cover h-64">
          <Heading size="h3">ISLE OF DOGS</Heading>
          <Heading size="h4">Hotelbooking for Yrgopelago</Heading>
        </div>
      </div>
    </div>
  );
};
