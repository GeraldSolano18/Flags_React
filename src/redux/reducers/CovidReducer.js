import {
  FETCH_COVID_REQUEST,
  FETCH_COVID_SUCCESS,
  FETCH_COVID_ERROR,
} from "../actions/CovidAction";
const initialState = {
  covidList: [],
  isFetching: false,
  error: null,
};

export const Covid = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COVID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        covidList: action.payload.data,
      };
    case FETCH_COVID_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
