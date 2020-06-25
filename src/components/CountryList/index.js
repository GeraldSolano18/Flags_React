import React, { useEffect } from "react";
import { fetchCountry } from "../../redux/actions/CountryAction";
import { CountryLists } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {Wrapper} from '../wrapper'
import { Country } from "../Country";

export const CountryList = () => {
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(fetchCountry());
   },[])
  
   const countryListByName = useSelector((store) => store.Country.countryListByName)

   const countryList = useSelector((store) => {
    if (store.Country.filterByRegion !== '' && countryListByName.length === 0) {
      return store.Country.countryFilteredByRegion;
    }
    
     //si encuentra una coincidencia pues countryList retornara el array countryListByName
     if (countryListByName.length > 0) {
       return countryListByName
     }
     //SI no encunetra coincidencias 
     //por defecto la lista sera toda la lista de todos los paises 
     return store.Country.countryList
   })

  return (
    <Wrapper>
      <CountryLists>
        {countryList.map(({ name, flag, alpha2Code, population, region, capital }) => (
          <Country
            key={alpha2Code}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
            alpha2Code={alpha2Code}
          />
        ))}
      </CountryLists>
    </Wrapper>
  );
};
