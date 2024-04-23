import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

export const Hero = ({ scrollToProducts }) => {
  return (
    <div className="h-[calc(80vh-124px)] flex flex-col justify-end items-center text-center pt-16">
      <div className="flex flex-col gap-8 w-1/2 items-center pb-8">
        <div>
          <Heading size={"h2"}>Explore the latest skills drop</Heading>
          <p className="mt-4">
            From trusted languages to trending frameworks and must-have
            packages.
          </p>
        </div>
        <Button text={"SHOP NOW"} onClick={scrollToProducts} />
        <p className="text-xs">
          (Also, I'm a web developer student currently seeking an internship.
          This is my portfolio.)
        </p>
      </div>
    </div>
  );
};
