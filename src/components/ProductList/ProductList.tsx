import { FC } from "react";
import { Updater } from "use-immer";
import { ICart, ProductItem } from "@/types";
import { Product, Row } from "@/components";

interface ProductListProps {
  updateCart: Updater<ICart>;
}

const ProductList: FC<ProductListProps> = (props) => {
  const { updateCart } = props;
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
          <Product key={product.id} product={product} updateCart={updateCart} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
