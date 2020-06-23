import React, { useState } from 'react'
import {setCountryByName} from '../../redux/actions/CountryAction'
import styled from 'styled-components'
import {Input} from '../Input'
import { useDispatch } from 'react-redux'

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  }
`

export function Search() {
    //Crea un estado local para manejar el valor del input 
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  //Filtramos el nombre 
  const filterByName = (e) => {
      //ejecutamos la funcion del estado local y pasamos el valor que esta escrito en el input
    setInputValue(e.target.value)
     //le mandamos al actionCreator el valor que esta escrito en el input
    dispatch(setCountryByName(e.target.value))
  }
  //LImpiamos el valor del estado global y del local
  const clearInput = () => {
    dispatch(setCountryByName(''))
    setInputValue('')
  }
  return (
    <SearchStyled>
      {
        inputValue &&
        <i className='fas fa-times close' onClick={clearInput}></i>
      }
      <Input placeholder="Search for a country..." value={inputValue} onChange={filterByName} />
    </SearchStyled>
  )
}

export default Search