import { ProductItem } from "@/types";
import { ChangeCountProduct, MyButton } from "@/components";
import { useContext } from "react";
import { CartContext } from "@/context";
import { changeCount } from "@/context/Cart/actions";

interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const { product } = props;
  const { cart, dispatch } = useContext(CartContext);

  const count =
    cart.items.find((productItem) => productItem.id === product.id)?.count || 0;

  const incrementCart = () => {
    dispatch(changeCount(product, count + 1));
  };

  const decrementCart = () => {
    dispatch(changeCount(product, count - 1));
  };

  const changeCartCount: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    dispatch(changeCount(product, +event.target.value));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.discount?.value}</p>
        <MyButton onClick={incrementCart}>Купить</MyButton>
        {count > 0 && (
          <ChangeCountProduct
            count={count}
            onDecrementCount={decrementCart}
            onIncrementCount={incrementCart}
            handleChangeCount={changeCartCount}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
