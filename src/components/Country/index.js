import React from "react";
// import {useSelector} from 'react-redux';
import { CountrySyled, Article, Img, StyledLink } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";

export const Country = ({ flag, name, population, region, capital }) => {
  // const isFetching = useSelector((store) =>store.Country.isFetching);
  // console.log('oyetee')
  // console.log(isFetching)

   const [show, element] = useNearScreen();
  return (
  
      <CountrySyled ref={element}>
        {show && (
          <> 
            <StyledLink style={{ textDecoration: 'none' }} to={`/detail/${name}`}>
            <Article>
              <Img alt="imagendeCounty" src={flag} />
              <div className="details">
                <h2>{name}</h2>
                <p>
                  <strong>Population:</strong>
                  {population}
                </p>
                <p>
                  <strong>Region:</strong>
                  {region}
                </p>
                <p>
                  <strong>Capital:</strong>
                  {capital}
                </p>
              </div>
            </Article>
            </StyledLink>
          </>
        )}
      </CountrySyled>

  );
};
