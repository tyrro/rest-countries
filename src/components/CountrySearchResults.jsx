import React, { useContext, useState } from 'react';
import { CountryContext } from '../context/CountryContext';

const CountrySearchResults = () => {
  const { countries, fetchCountryDetails } = useContext(CountryContext);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = event => {
    setSelectedCountry(event.target.value);
    console.log(event.target.value);
    fetchCountryDetails(event.target.value);
  };

  return (
    <div className="country-search-results">
      <div className="country-search-results-header">Results</div>
      <select value={selectedCountry} onChange={event => handleChange(event)}>
        {countries.map(country => (
          <option
            key={country.alpha3Code}
            value={country.name}
            selected={country.name === selectedCountry}
          >
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySearchResults;
