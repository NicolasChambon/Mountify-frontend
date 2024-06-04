import { FETCH_REGIONS_SUCCESS } from "../actions/regionActions";

export const initialState = {
  regions: [],
};

const regionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REGIONS_SUCCESS:
      return {
        ...state,
        regions: action.regions,
      };
    default:
      return state;
  }
};

export default regionReducer;
