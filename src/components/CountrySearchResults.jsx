import React, { useContext, useState, useEffect } from 'react';
import { CountryContext } from '../context/CountryContext';

const CountrySearchResults = () => {
  const { countries, fetchCountryDetails } = useContext(CountryContext);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]?.name);

  useEffect(() => {
    setSelectedCountry(countries[0]?.name);
  }, [countries]);

  useEffect(() => {
    if (selectedCountry) {
      fetchCountryDetails(selectedCountry);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  const handleChange = event => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="country-search-results">
      <div className="country-search-results__header">Results</div>
      <div className="country-search-results__select">
        <select value={selectedCountry} onChange={event => handleChange(event)}>
          {countries.map(country => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountrySearchResults;
