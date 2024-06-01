import Profile from "./components/Profile/Profile.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";
import Cart from "./components/Cart/Cart.tsx";
import { ICart } from "./types/product.ts";
import { useImmer } from "use-immer";

function App() {
  const isLoggedIn = true;
  const [cart, updateCart] = useImmer<ICart>({
    items: [],
  });

  return (
    <>
      {isLoggedIn && <Profile />}
      <ProductList updateCart={updateCart} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
