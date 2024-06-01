import { useState } from "react";
import { Updater } from "use-immer";
import { ICart, ProductItem } from "@/types";
import { MyButton, ChangeCountProduct } from "@/components";

interface ProductProps {
  product: ProductItem;
  updateCart: Updater<ICart>;
}

const Product = (props: ProductProps) => {
  const { product, updateCart } = props;

  const [count, setCount] = useState(0);
  const incrementCart = () => {
    const nextState = count + 1;
    setCount(nextState);

    updateCart((draft) => {
      const findProduct = draft.items.find((item) => item.id === product.id);
      if (findProduct) {
        findProduct.count += 1;
      } else {
        draft.items.push({ ...product, count: 1 });
      }
    });
  };

  const decrementCart = () => {
    setCount((prevState) => prevState - 1);
    updateCart((draft) => {
      const findProduct = draft.items.find((item) => item.id === product.id);
      if (findProduct) {
        findProduct.count -= 1;
      } else {
        throw new Error(
          "Попытка изменить количество товара которого нет в корзине",
        );
      }
      if (findProduct.count === 0) {
        draft.items = draft.items.filter((item) => item.id !== product.id);
      }
    });
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
