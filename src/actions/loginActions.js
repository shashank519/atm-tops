import {
  LOGGING_IN,
  LOGGING_IN_SUCCESS,
  LOGGING_IN_ERROR
} from "Actions/loginActions.js";

export const logingInUser = () => {
  return {
    type: LOGGING_IN
  };
};

export const userLoggedIn = data => {
  return {
    type: LOGGING_IN_SUCCESS,
    data
  };
};

export const userLoginError = error => {
  return {
    type: LOGGING_IN_ERROR,
    error
  };
};
