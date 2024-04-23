import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

export const Hero = ({ scrollToProducts }) => {
  return (
    <div className="h-[calc(100vh-124px)] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col gap-8 w-2/3 items-center mt-20 max-w-[432px]">
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
