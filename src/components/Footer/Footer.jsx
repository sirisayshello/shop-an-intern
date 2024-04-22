import { forwardRef } from "react";
import { Heading } from "../Heading/Heading";

export const Footer = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="w-full mt-16">
      <div className="border-t border-black px-6 py-8">
        <Heading size="h2">ABOUT</Heading>
        <p>Some information about Siri.</p>
      </div>
      <div className="border-t border-black px-6 py-8">
        <Heading size="h2">BASED IN GOTHENBURG</Heading>
      </div>
    </div>
  );
});
