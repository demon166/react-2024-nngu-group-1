import { useImmer } from "use-immer";
import { ICart } from "@/types";
import { Profile, ProductList, Cart } from "@/components";

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
