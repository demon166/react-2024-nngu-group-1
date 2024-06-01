import { createContext, Dispatch, FC, ReactNode, useState } from "react";

interface ThemeProviderProvider {
  children: ReactNode;
}

export enum ThemeVariable {
  light = "light",
  dark = "dark",
}

interface ThemeContextType {
  theme: ThemeVariable;
  setTheme: Dispatch<React.SetStateAction<ThemeVariable>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeVariable.light,
  setTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariable>(ThemeVariable.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
