import { FC } from "react";
import { ICart } from "@/types";

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
