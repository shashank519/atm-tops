import {
  CHANGE_USER_CARDNO,
  CHANGE_USER_PINNO,
  SET_DEDUCTED_AMOUNT
} from "Constants/atmConstants.js";

const initState = {
  id: "shashank_007",
  cardNumber: 4242424242424242,
  pin: 1010,
  balance: 100000,
  userCardNo: "",
  userPin: 0,
  deductedAmount: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_USER_CARDNO:
      return { ...state, userCardNo: action.cardNo };
    case CHANGE_USER_PINNO:
      return { ...state, userPin: action.pinNo };
    case SET_DEDUCTED_AMOUNT:
      return {
        ...state,
        balance: state.balance - action.amt,
        deductedAmount: action.amt
      };
    default:
      return state;
  }
};
