import React, { createContext, useState } from 'react';
import { ITheme, lightTheme } from '../styles/themes';

interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: lightTheme,
  setTheme: () => {},
});

interface IThemeStoreProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: IThemeStoreProps): JSX.Element => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
