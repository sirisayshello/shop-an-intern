import { Bag } from "../Products/Bag";

export const CartWidget = ({ productCount }) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button onClick={navigateToCart}>
      <Bag />
      <span>{productCount}</span>
    </button>
  );
};
