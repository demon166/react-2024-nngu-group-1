import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/products/2">Товар 2</Link>
    </div>
  );
};

export default HomePage;
