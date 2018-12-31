import { combineReducers } from "redux";
import atmReducer from "./atmReducer";

const appRootReducer = combineReducers({
  atmReducer
});

export default appRootReducer;
