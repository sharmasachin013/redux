import React from "react";

import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../redux/actions/actionCreators";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handlereset = () => {
    dispatch(resetAction());
  };
  return (
    <>
      <strong>Counter:</strong>
      {counter}
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handlereset}>Reset</button>
    </>
  );
}

export default Counter;
