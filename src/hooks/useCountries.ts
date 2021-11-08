import { CountryContext } from '../contexts/CountryContextProvider';
import { useContext } from 'react';

export const useCountries = () => useContext(CountryContext);
