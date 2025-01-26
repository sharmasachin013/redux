import React from "react";
import { increment, decrement, reset } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <strong>Counter:</strong>
      {value}
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
