import { createContext, useContext, useState, ReactNode } from "react";
import styles from "./ThemeContext.module.css";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextProps = {
  theme: string;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps | undefined => {
  const value = useContext(ThemeContext);
  return value;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("dark");

  const contextValue: ThemeContextProps = { theme };
  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={styles.theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
