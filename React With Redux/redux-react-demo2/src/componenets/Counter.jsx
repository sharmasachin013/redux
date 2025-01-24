import React from "react";

import {
  incrementAction,
  decrementAction,
  resetAction,
  incrementByValueAction,
} from "../redux/actions/actionCreators";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const [value, setValue] = useState("");

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

  const handleIncrementByValue = () => {
    dispatch(incrementByValueAction(value));
  };

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <strong>Counter:</strong>
      {counter}
      <br />
      <br />
      <input type="number" onChange={handleChange} value={value} />
      <br /> <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handlereset}>Reset</button>
      <button onClick={handleIncrementByValue}>Increment By Value</button>
    </>
  );
}

export default Counter;
