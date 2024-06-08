import { Cart, ProductList, Profile } from "@/components";
import ThemesChanger from "@/components/ThemesChanger/ThemesChanger";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

function App() {
  const isLoggedIn = true;

  const { theme } = useContext(ThemeContext);

  return (
    <div data-bs-theme={theme}>
      <ThemesChanger />
      {theme}
      {isLoggedIn && <Profile />}
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
