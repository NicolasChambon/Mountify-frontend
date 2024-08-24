import { combineReducers } from 'redux';

import mountainReducer from './mountainReducer';
import registrationReducer from './registrationReducer';
import globalReducer from './globalReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  mountain: mountainReducer,
  registration: registrationReducer,
  global: globalReducer,
  login: loginReducer,
});

export default rootReducer;
