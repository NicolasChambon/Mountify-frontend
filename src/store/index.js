import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import reducer from "../reducers/indexReducer";

import mountainMiddleware from "../middleware/mountainMiddleware";
import regionMiddleware from "../middleware/regionMiddleware";
import countryMiddleware from "../middleware/countryMiddleware";

const enhancer = composeWithDevTools(
  applyMiddleware(mountainMiddleware, regionMiddleware, countryMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
