import { ChangeEventHandler, useContext } from "react";
import { ThemeContext, ThemeVariable } from "@/context/Theme/ThemeProvider";

const ThemesChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setTheme(event.target.value as ThemeVariable);
  return (
    <div>
      <input
        name="theme"
        checked={theme === ThemeVariable.light}
        type="radio"
        id="theme-light"
        value={ThemeVariable.light}
        onChange={handleChange}
      />
      <label htmlFor="theme-light">Светлая</label>
      <input
        name="theme"
        checked={theme === ThemeVariable.dark}
        type="radio"
        id="theme-dark"
        value={ThemeVariable.dark}
        onChange={handleChange}
      />
      <label htmlFor="theme-dark">Темная</label>
    </div>
  );
};

export default ThemesChanger;
