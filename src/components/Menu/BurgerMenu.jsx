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
        <button aria-label="close menu">
          <CloseButton large onClick={toggleHamburger} />
        </button>
      </div>
      <div>
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
      <div className="p-6">
        <p>PROJECTS</p>
        <div className="overflow-y-scroll no-scrollbar">
          <a href="https://lia-app.vercel.app/" target="_blank">
            <div className="pt-6">
              <p className="text-sm font-medium">LIA EXPRESS</p>
              <p className="text-sm">Platform for intern-company connections</p>
            </div>
          </a>
          <a href="https://patthecat.netlify.app/" target="_blank">
            <div className="pt-6">
              <p className="text-sm font-medium">PAT THE CAT</p>
              <p className="text-sm">A useless website</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
