import { ICart } from "../../types/product.ts";
import { FC } from "react";

interface CartProps {
  cart: ICart;
}
const Cart: FC<CartProps> = (props) => {
  const {
    cart: { items },
  } = props;
  return (
    <ul>
      {items.map((item) => (
        <li>
          {item.name} - {item.count}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
