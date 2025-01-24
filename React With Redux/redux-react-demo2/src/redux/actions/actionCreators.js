import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_VALUE } from "./actionTypes";

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};

export const incrementByValueAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
