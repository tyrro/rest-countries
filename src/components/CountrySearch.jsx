import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const CountySearch = () => {
  const { searchCountriesByCapital } = useContext(CountryContext);

  const handleCountrySearch = (event) => {
    console.log(event.target.value);
    searchCountriesByCapital(event.target.value);
  };
  return (
    <div className="country-search">
      <div className="country-search-header">Search With Capital</div>
      <div className="country-search-input">
        <input
          type="text"
          id="capital"
          placeholder="Capital"
          onChange={(event) => handleCountrySearch(event)}
        />
      </div>
    </div>
  );
};

export default CountySearch;
