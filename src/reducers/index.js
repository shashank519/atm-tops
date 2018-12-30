import { combineReducers } from "redux";
import demoReducer from "./demoReducer";

const commonState = {
  defaultVal: false
};

const commonReducer = (state = commonState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const appRootReducer = combineReducers({
  commonReducer,
  demoReducer
});

export default appRootReducer;
