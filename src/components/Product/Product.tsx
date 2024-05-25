import { ICart, ProductItem } from "../../types/product.ts";
import MyButton from "../MyButton/MyButton.tsx";
import { Dispatch, SetStateAction, useState } from "react";
import ChangeCountProduct from "../ChangeCountProduct/ChangeCountProduct.tsx";

interface ProductProps {
  product: ProductItem;
  setCart: Dispatch<SetStateAction<ICart>>;
}

const Product = (props: ProductProps) => {
  const { product, setCart } = props;

  const [count, setCount] = useState(0);
  const incrementCart = () => {
    const nextState = count + 1;
    setCount(nextState);

    setCart((prevState) => {
      return {
        ...prevState,
        items: [...prevState.items, { ...product, count: nextState }],
      };
    });
  };

  const decrementCart = () => {
    setCount((prevState) => prevState - 1);
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
          />
        )}
      </div>
    </div>
  );
};

export default Product;
