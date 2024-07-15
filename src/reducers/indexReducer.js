import { combineReducers } from 'redux';

import mountainReducer from './mountainReducer';

const rootReducer = combineReducers({
  mountain: mountainReducer,
});

export default rootReducer;
