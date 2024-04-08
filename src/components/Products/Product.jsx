export const Product = ({ name, description }) => {
  return (
    <div className="flex flex-col pb-4 w-1/2 lg:w-1/4">
      <img className="w-full h-full" src="assets/img/product.png" alt="" />
      <div className="flex flex-col p-4">
        <h3>{name}</h3>
        <p className="text-xs text-gray-600 lg:text-base">{description}</p>
      </div>
    </div>
  );
};
