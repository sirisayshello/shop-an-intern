import { Heading } from "../Heading/Heading";

export const Confirmation = () => {
  return (
    <div className="p-6 flex flex-col gap-4 border-t-[1px] border-black">
      <Heading size="h3">THANK YOU FOR YOUR INTEREST!</Heading>
      <div className="flex flex-col gap-4">
        <p className="text-sm">
          I'm interested too! If you're up for a chat about code, or maybe even
          discussing internship opportunities, let's grab a coffee. To reach out
          (since you probably didn't send that email), you'll find contact
          information below.
        </p>
        <p className="text-sm">Best regards, Siri</p>
      </div>
      <div className="flex justify-center items-center gap-8 mt-4">
        <a
          href="https://www.linkedin.com/in/siri-sj%C3%B6lin-89481417b/"
          target="_blank"
        >
          <img src="assets/svg/linkedin.svg" alt="linkedin logo" />
        </a>
        <a href="mailto:siri.sjolin@hotmail.com">
          <img src="assets/svg/mail.svg" alt="mail logo" />
        </a>
      </div>
    </div>
  );
};
