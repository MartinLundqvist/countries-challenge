import { ThemeContext } from '../contexts/ThemeContextProvider';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
