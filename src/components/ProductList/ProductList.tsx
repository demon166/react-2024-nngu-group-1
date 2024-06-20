import { FC, useState } from "react";
import { Product, Row } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";
import Pagination from "@/components/Pagination/Pagination";

const ProductList: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(3);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { currentPage, perPage }],
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
      <select
        name=""
        id=""
        value={perPage}
        onChange={(event) => {
          setPerPage(+event.target.value);
        }}
      >
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
      <Row direction="row" wrap>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <Pagination
          pagination={data.pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Row>
    </div>
  );
};

export default ProductList;
