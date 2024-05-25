import Profile from "./components/Profile/Profile.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";
import Cart from "./components/Cart/Cart.tsx";
import { useState } from "react";
import { ICart } from "./types/product.ts";

function App() {
  const isLoggedIn = true;
  const [cart, setCart] = useState<ICart>({
    items: [],
  });

  return (
    <>
      {isLoggedIn && <Profile />}
      <ProductList setCart={setCart} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
