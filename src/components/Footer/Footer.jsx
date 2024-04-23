import { forwardRef } from "react";
import { Heading } from "../Heading/Heading";

export const Footer = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="w-full mt-16">
      <div className="border-t border-black flex flex-col gap-4 px-6 py-8">
        <Heading size="h2">ABOUT SIRI</Heading>
        <p className="max-w-3xl">
          A full-stack developer student with a fondness for frontend (but also
          enjoys the taste of backend). Background in creative copywriting and
          photography. Successful competitor in latte art throwdowns. And I like
          horses.
        </p>
      </div>
      <div className="border-t border-black px-6 py-8 hidden lg:flex flex-col gap-4">
        <Heading size="h2">PROJECTS</Heading>
        <div className="flex gap-8 items-center">
          <a href="https://lia-app.vercel.app/" target="_blank">
            <div className="flex flex-col justify-center">
              <p className="hover:text-black/50">LIA EXPRESS</p>
              <Heading size="h5">
                Platform for intern-company connections
              </Heading>
            </div>
          </a>
          <a href="https://patthecat.netlify.app/" target="_blank">
            <p className="hover:text-black/50">PAT THE CAT</p>
            <Heading size="h5">A useless website</Heading>
          </a>
          <a href="https://sirisjolin.se/cockapoo-palace/" target="_blank">
            <p className="hover:text-black/50">ISLE OF DOGS</p>
            <Heading size="h5">Hotelbooking for Yrgopelago</Heading>
          </a>
        </div>
      </div>
      <div className="flex gap-8 border-t border-black px-6 py-8">
        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/siri-sj%C3%B6lin-89481417b/"
            target="_blank"
          >
            <img src="assets/svg/linkedin.svg" alt="linkedin logo" />
          </a>
          <a href="https://github.com/sirisayshello" target="_blank">
            <img src="assets/svg/github.svg" alt="github logo" />
          </a>
        </div>
      </div>
    </div>
  );
});
