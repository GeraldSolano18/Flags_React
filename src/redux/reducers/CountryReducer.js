import {
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_ERROR,
  SET_COUNTRY_BY_NAME,
  FILTER_BY_REGION,
} from "../actions/CountryAction";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
  isFetching: false,
  error: null,
};

export const Country = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        countryList: action.payload.data,
      };
    case FETCH_COUNTRY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    case SET_COUNTRY_BY_NAME: {
      let list
      //si el filtro del select esta seleccionado pues lista pasa a ser el array countryFilteredByRegion
   
      if (state.filterByRegion !== '') {
        console.log('Este es ek filtro',state.filterByRegion)
        list = state.countryFilteredByRegion
        console.log('este es el list cuando hay un filtro de region', list)
      } else {
        //si no pues ya que no hay filtro de region, lista sera igual a la lista de todos los paises
        list = state.countryList;
      }
      //filtra y devuelve el nombre de pais del estado y del input a minisculas y con el includes agrega al array countryListByName los que coinciden
      const countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }

    case FILTER_BY_REGION: {
      const { regionSelected } = action.payload;

      //si la region que viene del payload esta vacia se retornan el estado con los valores vacios
      if (regionSelected === '') {
        return { ...state, countryFilteredByRegion: [], filterByRegion: '' };
      }
      //de otro modo se filtra de la lista de todos los paises los que coincidan con la region que viene del payload
      const countryFilteredByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );
      console.log('este es el countryFIltered by region',countryFilteredByRegion )

      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: regionSelected,
      };
    }

    default:
      return state;
  }
};
