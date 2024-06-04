import {
  FETCH_MOUNTAINS,
  fetchMountainsSuccess,
  ADD_MOUNTAIN,
  fetchMountains,
  clickMapCoordinates,
} from '../actions/mountainActions';

const mountainMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MOUNTAINS: {
      fetch('http://localhost:3000/api/mountains')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((mountains) => {
          store.dispatch(fetchMountainsSuccess(mountains));
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
        })
        .finally(() => {});
      break;
    }
    case ADD_MOUNTAIN: {
      fetch('http://localhost:3000/api/mountains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.mountain),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => {
          store.dispatch(fetchMountains());
          store.dispatch(clickMapCoordinates({ lat: 0, lng: 0 }));
          action.navigate('/Mountains');
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

export default mountainMiddleware;
