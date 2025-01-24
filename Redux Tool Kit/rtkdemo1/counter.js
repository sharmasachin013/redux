const {
  createAction,
  createReducer,
  configureStore,
  buildCreateSlice,
} = require("@reduxjs/toolkit");

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const incrementByValue = createAction("INCREMENT_BY_VALUE");
const reset = createAction("RESET");
const initialState = { counter: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.counter++;
    })
    .addCase(decrement, (state) => {
      state.counter--;
    })
    .addCase(incrementByValue, (state, action) => {
      state.counter = state.counter + action.payload;
    })
    .addCase(reset, (state) => {
      state.counter = 0;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const store = configureStore({ reducer: counterReducer });
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByValue(10));
store.dispatch(reset());
