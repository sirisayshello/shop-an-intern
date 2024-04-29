export const Button = ({ text, onClick, ...props }) => {
  return (
    <button
      className="bg-black w-full p-2 text-white max-w-[432px]"
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};
