import { combineReducers } from 'redux';

import mountainReducer from './mountainReducer';
import regionReducer from './regionReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  mountain: mountainReducer,
  region: regionReducer,
  country: countryReducer,
});

export default rootReducer;
