import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/Profile.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";

function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <Profile />}
      <ProductList />
      <MyButton />
    </>
  );
}

export default App;
