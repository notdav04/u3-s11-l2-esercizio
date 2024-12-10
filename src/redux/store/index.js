import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import removeFavReducer from "../reducers/removeFavReducer";

const rootStore = combineReducers({
  main: mainReducer,
  remove: removeFavReducer
});
const store = configureStore({
  reducer: rootStore
});
export default store;
