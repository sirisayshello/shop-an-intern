export const Button = ({ text, onClick, disabled, type }) => {
  return (
    <button
      className="bg-black w-full p-2 text-white max-w-[432px]"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
