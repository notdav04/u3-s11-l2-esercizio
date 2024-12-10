import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import JobsReducer from "../reducers/jobReducer";

const rootStore = combineReducers({
  main: mainReducer,
  jobs: JobsReducer
});
const store = configureStore({
  reducer: rootStore
});
export default store;
