import { Bag } from "./Bag";

export const Product = ({ name, description }) => {
  return (
    <div className="flex flex-col pb-4 w-1/2 lg:w-1/4">
      <div className="relative group w-full h-full flex flex-col overflow-hidden">
        <img className="w-full h-full" src="assets/img/product.png" alt="" />
        <div className="hidden [@media(hover:hover)]:flex absolute w-full bottom-[-3rem] group-hover:bottom-0 transition-all bg-white p-4 justify-center items-center">
          <Bag />
        </div>
        <div className="absolute bottom-0 right-0 h-12 px-4 flex justify-end items-center [@media(hover:hover)]:hidden">
          <Bag />
        </div>
      </div>
      <div className="flex flex-col p-4 h-32 bg-white">
        <h3>{name}</h3>
        <p className="text-xs text-gray-600 lg:text-base">{description}</p>
      </div>
    </div>
  );
};
