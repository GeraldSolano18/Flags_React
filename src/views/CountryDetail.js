import React, { useEffect,useState } from "react"
import {useSelector} from 'react-redux'
import {Header} from '../components/Header'
import {Wrapper} from '../components/wrapper'
import {CountryPage} from './style'
import {CountrySelected} from '../components/CountrySelected'
import {CovidInfo} from '../components/CovidInfo'

export const CountryDetail = ({ match,history }) => {

  //Esto almacena el valor del pais que haga match con el que recibe de la url
  const DBcountry = useSelector(store=>store.Country.countryList.find(item=>item.alpha2Code === match.params.id))
 
  const [country, setCountry] = useState(DBcountry)

  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data)
          console.log('Esto es match', match)
        })
    }
  }, [country, match.params.id]);
  function handleClick() {
    history.goBack()
  }

  return(
     <CountryPage>
       <Header/>
       <Wrapper>

       <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
         <div>
           <CountrySelected {...country} />
           <div>
             <CovidInfo {...match} />
           </div>
           
           </div>
       </Wrapper>
     </CountryPage>
       );
};
