import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);

  const searchCountriesByCapital = capital => {
    axios
      .get(`https://restcountries.eu/rest/v2/capital/${capital}`)
      .then(response => {
        // handle success
        setCountries(response.data);
      })
      .catch(error => {
        // handle error
      });
  };

  const fetchCountryDetails = country => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(response => {
        // handle success
        setCountryDetails(response.data);
      })
      .catch(error => {
        // handle error
      });
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        countryDetails,
        searchCountriesByCapital,
        fetchCountryDetails,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
