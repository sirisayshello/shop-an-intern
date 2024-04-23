export const Button = ({ text, onClick, disabled, type }) => {
  return (
    <button
      className="bg-black w-full p-2 text-white"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
