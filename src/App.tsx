import { useImmer } from "use-immer";
import { ICart } from "@/types";
import { Cart, ProductList, Profile } from "@/components";
import ThemesChanger from "@/components/ThemesChanger/ThemesChanger";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

function App() {
  const isLoggedIn = true;
  const [cart, updateCart] = useImmer<ICart>({
    items: [],
  });

  const { theme } = useContext(ThemeContext);

  return (
    <div data-bs-theme={theme}>
      <ThemesChanger />
      {theme}
      {isLoggedIn && <Profile />}
      <ProductList updateCart={updateCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
