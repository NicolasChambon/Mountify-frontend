import {
  FETCH_COUNTRIES,
  fetchCountriesSuccess,
} from '../actions/countryActions';

const countryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      fetch('http://localhost:3000/api/countries')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((countries) => {
          store.dispatch(fetchCountriesSuccess(countries));
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default countryMiddleware;
