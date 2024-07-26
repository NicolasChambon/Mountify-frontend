import { combineReducers } from 'redux';

import mountainReducer from './mountainReducer';
import registrationReducer from './registrationReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  mountain: mountainReducer,
  registration: registrationReducer,
  global: globalReducer,
});

export default rootReducer;
