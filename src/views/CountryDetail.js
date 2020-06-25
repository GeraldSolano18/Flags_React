import React, { useEffect,useState } from "react"
import {useSelector} from 'react-redux'
import {Header} from '../components/Header'
import {Wrapper} from '../components/wrapper'
import {CountryPage} from './style'
import {CountrySelected} from '../components/CountrySelected'

export const CountryDetail = ({ match,history }) => {

  const DBcountry = useSelector(store=>store.Country.countryList.find(item=>item.alpha2Code === match.params.id))
  const [country, setCountry] = useState(DBcountry)

  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data)
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
           <CountrySelected {...country}/>
           </div>
       </Wrapper>
     </CountryPage>
       );
};
