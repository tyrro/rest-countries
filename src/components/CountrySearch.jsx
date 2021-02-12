import React, { useContext, useRef } from 'react';
import { debounce } from 'throttle-debounce';

import { CountryContext } from '../context/CountryContext';

const CountySearch = () => {
  const { searchCountriesByCapital } = useContext(CountryContext);

  const debouncedSearch = useRef(
    debounce(1000, inputParam => {
      searchCountriesByCapital(inputParam);
    }),
  ).current;

  const handleCountrySearch = event => {
    debouncedSearch(event.target.value);
  };
  return (
    <div className="country-search">
      <div className="country-search-header">Search With Capital</div>
      <div className="country-search-input">
        <input
          type="text"
          id="capital"
          placeholder="Capital"
          onChange={event => handleCountrySearch(event)}
        />
      </div>
    </div>
  );
};

export default CountySearch;
