import { FETCH_COUNTRIES_SUCCESS } from "../actions/countryActions";

export const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
};

export default countryReducer;
