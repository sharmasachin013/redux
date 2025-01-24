import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_BY_VALUE,
} from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };

    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case RESET:
      return {
        counter: 0,
      };

    case INCREMENT_BY_VALUE: {
      return {
        counter: state.counter + action.payload,
      };
    }

    default:
      return state;
  }
};

export default counterReducer;
