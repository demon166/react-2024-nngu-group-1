import { useContext } from "react";
import {
  Cart,
  ProductList,
  Profile,
  ThemesChanger,
  CreateProduct,
} from "@/components";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

function App() {
  const isLoggedIn = true;

  const { theme } = useContext(ThemeContext);

  return (
    <div data-bs-theme={theme}>
      <ThemesChanger />
      <CreateProduct />
      {isLoggedIn && <Profile />}
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
