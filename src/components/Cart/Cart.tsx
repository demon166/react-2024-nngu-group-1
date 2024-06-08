import { FC, useContext } from "react";
import { CartContext } from "@/context";
import { changeCount } from "@/context/Cart/actions";
import { ChangeCountProduct } from "@/components";
import { ProductItem } from "@/types";

const Cart: FC = () => {
  const { cart, dispatch } = useContext(CartContext);

  const incrementCart = (product: ProductItem, count: number) => {
    dispatch(changeCount(product, count + 1));
  };

  const decrementCart = (product: ProductItem, count: number) => {
    dispatch(changeCount(product, count - 1));
  };

  const changeCartCount = (product: ProductItem, count: number) => {
    dispatch(changeCount(product, count));
  };

  return (
    <ul>
      {cart.items.map(
        (item) =>
          item.count && (
            <li key={item.id}>
              {item.name} - {item.count}
              <ChangeCountProduct
                count={item.count}
                onDecrementCount={() => decrementCart(item, item.count || 0)}
                onIncrementCount={() => incrementCart(item, item.count || 0)}
                handleChangeCount={(event) =>
                  changeCartCount(item, +event.target.value)
                }
              />
            </li>
          ),
      )}
    </ul>
  );
};

export default Cart;
