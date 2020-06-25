import React from "react";
import { CountrySelectedStyle } from "./styles";

export const CountrySelected = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}) => {
  return (
    <CountrySelectedStyle>
             <img src={flag} alt="sjjs" />
             <div>
             <h2>{name}</h2>
        <div className="grid">
          <div>
            <p><strong>Native Name:</strong> {nativeName}</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Sub Region:</strong> {subregion}</p>
            <p><strong>Capital:</strong> {capital}</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
            <p><strong>Currencies:</strong> {currencies.map((item) => <span key={item.name}>{item.name}</span>)}</p>
            <p className="languages"><strong>Languages:</strong> {languages.map((item) => <span key={item.name}>{item.name}</span>)}</p>
          </div>
        </div>
        <p className="borders"><strong>Border Countries:</strong></p>
        {borders.map((item) => <span key={item} className="border-item">{item}</span>)}
      </div>
    </CountrySelectedStyle>
  );
};
