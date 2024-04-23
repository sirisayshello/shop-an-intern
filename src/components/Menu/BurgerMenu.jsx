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
              <Heading size="h4">LIA EXPRESS</Heading>
              <Heading size="h5">
                Platform for intern-company connections
              </Heading>
            </div>
          </a>
          <a href="https://patthecat.netlify.app/" target="_blank">
            <div className="pt-6">
              <Heading size="h4">PAT THE CAT</Heading>
              <Heading size="h5">A useless website</Heading>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
