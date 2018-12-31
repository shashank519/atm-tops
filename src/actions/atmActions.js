import {
  CHANGE_USER_CARDNO,
  CHANGE_USER_PINNO,
  SET_DEDUCTED_AMOUNT
} from "Constants/atmConstants.js";

export const changeUserCardNo = cardNo => {
  return {
    type: CHANGE_USER_CARDNO,
    cardNo
  };
};

export const changeUserPinNo = pinNo => {
  return {
    type: CHANGE_USER_PINNO,
    pinNo
  };
};

export const setDeductedAmount = amt => {
  return {
    type: SET_DEDUCTED_AMOUNT,
    amt
  };
};
