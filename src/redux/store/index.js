import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const rootStore = combineReducers({
  main: mainReducer
});
const store = configureStore({
  reducer: rootStore
});
export default store;
