import {
  LOGGING_IN,
  LOGGING_IN_SUCCESS,
  LOGGING_IN_ERROR
} from "Actions/loginActions.js";

const demoState = {
  isLoggedIn: false,
  loading: false,
  data: {},
  error: {}
};

export default (state = demoState, action) => {
  switch (action.type) {
    case "LOGGING_IN":
      return { loading: true };
    case "LOGGING_IN_SUCCESS":
      return { loading: false, data: action.data, error: {} };
    case "LOGGING_IN_ERROR":
      return { loading: false, error: action.error, data: {} };
    default:
      return state;
  }
};
