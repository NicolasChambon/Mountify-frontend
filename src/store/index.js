import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import reducer from "../reducers/indexReducer";

import mountainMiddleware from "../middleware/mountainMiddleware";

const enhancer = composeWithDevTools(
  applyMiddleware(mountainMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
