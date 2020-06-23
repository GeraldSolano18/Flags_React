export const FETCH_COUNTRY_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_COUNTRY_ERROR = 'FETCH_POST_ERROR';
export const SET_COUNTRY_BY_NAME =' SET_COUNTRY_BY_NAME';
export const FILTER_BY_REGION ='FILTER_BY_REGION';

//Funciones creadoras de acciones
export const fetchCountry = () => (dispatch) => {

  dispatch({
    type: FETCH_COUNTRY_REQUEST,
  });
  

  fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_COUNTRY_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_COUNTRY_ERROR,
        error: error.toString(),
      });
    });

};

export const setCountryByName = (country) => ({
  type: SET_COUNTRY_BY_NAME ,
  payload: country,
});

export const filterByRegion = (regionSelected) =>({
  type: FILTER_BY_REGION,
  payload:{
    /*  aqui estaba el error, tenias que pasarle el payload como objeto  */
    regionSelected
  }
})