const { createStore } = require("redux");

// define initialState

const initialState = {
  counter: 0,
};

// Define Action Creators

const incrementByOneAction = () => {
  return {
    type: "INCREMENT_BY_1",
  };
};

const decrementByOneAction = () => {
  return {
    type: "DECREMENT_BY_1",
  };
};

const incrementByValueAction = (value) => {
  return {
    type: "INCREMENT_BY_VALUE",
    payload: value,
  };
};

const resetAction = () => {
  return {
    type: "RESET",
  };
};

// Define Reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_BY_1":
      return { counter: state.counter + 1 };
    case "DECREMENT_BY_1":
      return { counter: state.counter - 1 };
    case "INCREMENT_BY_VALUE":
      return { counter: state.counter + action.payload };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log("state accessed:", state);
});

store.dispatch(incrementByOneAction());
// store.dispatch(decrementByOneAction());
store.dispatch(incrementByValueAction(5));
store.dispatch(incrementByValueAction(5));
// store.dispatch(resetAction());
