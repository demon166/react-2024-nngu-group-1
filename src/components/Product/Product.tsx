import { ProductItem } from "../../types/product.ts";

interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const { product } = props;

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.discount?.value}</p>
    </div>
  );
};

export default Product;
