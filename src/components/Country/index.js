import React from "react";
// import {useSelector} from 'react-redux';
import { CountrySyled, Article, Img, StyledLink } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import slugify from 'slugify'

export const Country = ({ flag, name, population, region, capital, alpha2Code }) => {
  // const isFetching = useSelector((store) =>store.Country.isFetching);
  // console.log('oyetee') AGREGAR SPINNERCUANDO ESTA CARGADNO
  // console.log(isFetching)

   const [show, element] = useNearScreen();
  return (
  
      <CountrySyled ref={element}>
        {show && (
          <> 
            <StyledLink style={{ textDecoration: 'none' }} to={`/detail/${slugify(alpha2Code)}`}>
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
