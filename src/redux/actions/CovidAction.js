export const FETCH_COVID_REQUEST = 'FETCH_COVID_REQUEST';
export const FETCH_COVID_SUCCESS = 'FETCH_COVID_SUCCESS';
export const FETCH_COVID_ERROR = 'FETCH_COVID_ERROR';

//Funciones creadoras de acciones
export const fetchCovid = () => (dispatch) => {
  dispatch({
    type: FETCH_COVID_REQUEST,
  });
  
  fetch('https://covid19.mathdro.id/api/confirmed')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_COVID_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_COVID_ERROR,
        error: error.toString(),
      });
    });

};
