import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/Profile.tsx";

function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <Profile />}
      <MyButton />
    </>
  );
}

export default App;
