export const FETCH_MOUNTAINS = 'FETCH_MOUNTAINS';
export const FETCH_MOUNTAINS_SUCCESS = 'FETCH_MOUNTAINS_SUCCESS';

export const fetchMountains = () => ({
  type: FETCH_MOUNTAINS,
});

export const fetchMountainsSuccess = (mountains) => ({
  type: FETCH_MOUNTAINS_SUCCESS,
  mountains,
});
