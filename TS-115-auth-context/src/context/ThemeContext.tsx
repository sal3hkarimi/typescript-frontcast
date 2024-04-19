import React, { createContext } from "react";
import themes from "./themes";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(themes);

// export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({children,})=> {
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
