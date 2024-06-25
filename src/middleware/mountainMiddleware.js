import {
  FETCH_MOUNTAINS,
  fetchMountainsSuccess,
} from '../actions/mountainActions';

const mountainMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MOUNTAINS: {
      fetch(`${import.meta.env.VITE_MOUNTIFY_API_URL}/mountains/list`)
        // we get the response which is a Promise then we parse it to JSON
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        // here mountains can be exploited and stored in the state thanks to method dispatch
        .then((mountains) => {
          store.dispatch(fetchMountainsSuccess(mountains));
        })
        // if there is an error we catch it and display it in the console
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
