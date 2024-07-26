import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

import mountainMiddleware from '../middleware/mountainMiddleware';
import registrationMiddleware from '../middleware/registrationMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(mountainMiddleware, registrationMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
