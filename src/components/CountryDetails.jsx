import React, { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';

const CountryDetails = () => {
  const { countryDetails } = useContext(CountryContext);

  return (
    <div className="country-details">
      <div className="country-details__header">Country Details</div>
      {countryDetails.map(country => (
        <div className="country-details__body" key={country.name}>
          <div className="country-details__body-left">
            <div className="country-details__body-left__flag">
              <img src={country.flag} alt="" />
            </div>
          </div>

          <div className="country-details__body-right">
            <div className="country-details-country-name">Country Name: {country.name}</div>
            <div className="country-details-population">
              Population: {new Intl.NumberFormat().format(country.population)}
            </div>
            <div className="country-details-capital">Capital: {country.capital}</div>
            <div className="country-details-languages">
              Languages: {country.languages.map(language => language.name).join(', ')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
