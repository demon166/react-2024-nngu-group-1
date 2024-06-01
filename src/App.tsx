import { useImmer } from "use-immer";
import { ICart } from "@/types";
import { Cart, Counter, ProductList, Profile } from "@/components";

function App() {
  const isLoggedIn = true;
  const [cart, updateCart] = useImmer<ICart>({
    items: [],
  });

  return (
    <>
      <Counter />
      {isLoggedIn && <Profile />}
      <ProductList updateCart={updateCart} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
