import { forwardRef } from "react";

export const Footer = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="w-full mt-16">
      <div className="border-t border-black px-6 py-8">
        <h2>ABOUT</h2>
        <p>Some information about Siri.</p>
      </div>
      <div className="border-t border-black px-6 py-8">
        <h2>BASED IN GOTHENBURG</h2>
      </div>
    </div>
  );
});
