import { FETCH_MOUNTAINS_SUCCESS } from '../actions/mountainActions';

export const initialState = {
  mountainsList: [],
};

const mountainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOUNTAINS_SUCCESS:
      return {
        ...state,
        mountainsList: action.mountains,
      };

    default:
      return state;
  }
};

export default mountainReducer;
