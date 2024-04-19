export const CartProduct = () => {
  return (
    <div className="flex">
      <img className="w-28" src="assets/img/product.png" alt="" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex pl-4 justify-between">
          <h3>REACT</h3>
          <button>X</button>
        </div>
        <div className="flex justify-end bottom-0">
          <p>0 SEK</p>
        </div>
      </div>
    </div>
  );
};
