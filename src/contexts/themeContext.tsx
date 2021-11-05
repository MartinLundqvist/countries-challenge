import React, { useContext, createContext, useState } from 'react';
import { ITheme, lightTheme } from './themes';

interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: lightTheme,
  setTheme: () => {},
});

const useThemeStore = () => useContext(ThemeContext);

interface IThemeStoreProps {
  children: React.ReactNode;
}

const ThemeStore = ({ children }: IThemeStoreProps): JSX.Element => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, useThemeStore };
