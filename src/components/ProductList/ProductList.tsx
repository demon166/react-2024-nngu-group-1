import Product from "../Product/Product.tsx";
import { ProductItem } from "../../types/product.ts";
import Row from "../Row/Row.tsx";

const ProductList = () => {
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
  const list = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <div>
      <Row direction="column">{list}</Row>
    </div>
  );
};

export default ProductList;
