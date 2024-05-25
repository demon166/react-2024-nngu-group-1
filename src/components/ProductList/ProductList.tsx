import Product from "../Product/Product.tsx";
import { ICart, ProductItem } from "../../types/product.ts";
import Row from "../Row/Row.tsx";
import { Dispatch, FC, SetStateAction } from "react";

interface ProductListProps {
  setCart: Dispatch<SetStateAction<ICart>>;
}

const ProductList: FC<ProductListProps> = (props) => {
  const { setCart } = props;
  const products: ProductItem[] = [
    {
      id: 1,
      name: "Товар 1",
      price: 50,
    },
    {
      id: 2,
      name: "Товар 2",
      price: 150,
    },
    {
      id: 3,
      name: "Товар 3",
      price: 250,
    },
    {
      id: 4,
      name: "товар 4",
      price: 500,
      discount: {
        type: "percent",
        value: 10,
      },
    },
  ];
  return (
    <div>
      <Row direction="row">
        {products.map((product) => (
          <Product key={product.id} product={product} setCart={setCart} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
