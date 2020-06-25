import { combineReducers } from 'redux'
import {Country} from './CountryReducer'
import {Covid} from './CovidReducer'

export default combineReducers({
    Country,
    Covid
  });