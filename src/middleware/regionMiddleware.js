import { FETCH_REGIONS, fetchRegionsSuccess } from '../actions/regionActions';

const regionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGIONS: {
      fetch('http://localhost:3000/api/regions')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((regions) => {
          store.dispatch(fetchRegionsSuccess(regions));
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

export default regionMiddleware;
