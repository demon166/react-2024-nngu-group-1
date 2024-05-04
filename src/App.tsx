import MyButton from "./components/MyButton/MyButton";

function App() {
    const user = {
        name: "Дмитрий",
        imageUrl: "/vite.svg",
    }
  return (
    <>
      Hello world:
        { user.name }
        <img src={user.imageUrl} alt=""/>
      <MyButton />
    </>
  )
}

export default App
