import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes";

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

    default:
      return state;
  }
};

export default counterReducer;
