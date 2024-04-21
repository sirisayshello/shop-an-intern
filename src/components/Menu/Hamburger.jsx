export const Hamburger = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-8 h-8 flex flex-col justify-around lg:hidden hover:cursor-pointer"
    >
      <div className="w-8 h-[2px] bg-black transition-all"></div>
      <div className="w-8 h-[2px] bg-black transition-all"></div>
      <div className="w-8 h-[2px] bg-black transition-all"></div>
    </div>
  );
};
