import { FC } from "react";
import { Product, Row } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";

const ProductList: FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isError || !data) {
    return <h1>Ошибка....</h1>;
  }

  return (
    <div>
      <Row direction="row">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
