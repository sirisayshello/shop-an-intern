export const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className="bg-black w-full p-2 text-white"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
