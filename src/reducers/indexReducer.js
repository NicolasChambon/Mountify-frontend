import { combineReducers } from 'redux';

import mountainReducer from './mountainReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  mountain: mountainReducer,
  registration: registrationReducer,
});

export default rootReducer;
