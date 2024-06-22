import { Link, useNavigate, useParams } from "react-router-dom";
import { MyButton } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/services/products";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => getProduct(queryKey[1]),
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isError || !data) {
    return <h1>Ошибка....</h1>;
  }

  return (
    <div>
      <h1>Информация о товаре - {data.name}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to=".." relative="path">
              Catalog
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <MyButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </MyButton>
    </div>
  );
};

export default ProductPage;
