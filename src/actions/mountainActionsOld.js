export const FETCH_MOUNTAINS = 'FETCH_MOUNTAINS';
export const FETCH_MOUNTAINS_SUCCESS = 'FETCH_MOUNTAINS_SUCCESS';
export const ADD_MOUNTAIN = 'ADD_MOUNTAIN';
export const CLICK_MAP_COORDINATES = 'CLICK_MAP_COORDINATES';

export const fetchMountains = () => ({
  type: FETCH_MOUNTAINS,
});

export const fetchMountainsSuccess = (mountains) => ({
  type: FETCH_MOUNTAINS_SUCCESS,
  mountains,
});

export const addMountain = (mountain, navigate) => ({
  type: ADD_MOUNTAIN,
  mountain,
  navigate,
});

export const clickMapCoordinates = (coordinates) => ({
  type: CLICK_MAP_COORDINATES,
  coordinates,
});
