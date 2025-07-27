import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
import reportReducer from "./slices/reportSlice";

const reducer = combineReducers({
  authState: authReducer,
  usersState: usersReducer,
  reportState: reportReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
