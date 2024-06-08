import { FC, useEffect, useState } from "react";
import { ProductItem } from "@/types";
import { Product, Row } from "@/components";
import { api } from "@/app/api";

const ProductList: FC = () => {
  const [products, setProduct] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get("/products");
      setProduct(data);
    } catch (e) {
      console.error(e);
      setError(e as string);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isError) {
    return <h1>Ошибка.... {error}</h1>;
  }

  return (
    <div>
      <Row direction="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
