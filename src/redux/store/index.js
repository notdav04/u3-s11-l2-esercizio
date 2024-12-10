import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import removeFavReducer from "../reducers/removeFavReducer";

const rootStore = combineReducers({
  main: mainReducer
});
const store = configureStore({
  reducer: rootStore
});
export default store;
