import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

export const Checkout = ({ onSubmit }) => {
  return (
    <div className="p-6 flex flex-col gap-4 border-t-[1px] border-black">
      <Heading size="h3">CHOOSE PAYMENT</Heading>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="coffee">COFFEE*</label>
          <input type="checkbox" name="coffee" value="cofee" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="encouragement">ENCOURAGEMENT</label>
          <input type="checkbox" name="encouragement" value="encouragement" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="highfives">HIGH-FIVES</label>
          <input type="checkbox" name="highfives" value="highfives" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="endlessgratitude">ENDLESS GRATITUDE</label>
          <input
            type="checkbox"
            name="endlessgratitude"
            value="endlessgratitude"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="knowledge">KNOWLEDGE</label>
          <input type="checkbox" name="knowledge" value="knowledge" />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <Heading size={"h3"}>TOTAL</Heading>
          <Heading size={"h3"}>0 SEK</Heading>
        </div>
        <a href="mailto:siri.sjolin@hotmail.com">
          <Button onClick={onSubmit} text={"PLACE ORDER"} />
        </a>
      </div>
    </div>
  );
};
