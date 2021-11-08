import { SearchContext } from '../contexts/SearchContextProvider';
import { useContext } from 'react';

export const useSearch = () => useContext(SearchContext);
