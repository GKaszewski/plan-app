import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
