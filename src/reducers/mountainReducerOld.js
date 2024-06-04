import {
  FETCH_MOUNTAINS_SUCCESS,
  CLICK_MAP_COORDINATES,
} from '../actions/mountainActions';

export const initialState = {
  mountains: [],
  clickedCoordinates: { lat: 0, lng: 0 },
};

const mountainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOUNTAINS_SUCCESS:
      return {
        ...state,
        mountains: action.mountains,
      };
    case CLICK_MAP_COORDINATES:
      return {
        ...state,
        clickedCoordinates: action.coordinates,
      };
    default:
      return state;
  }
};

export default mountainReducer;
