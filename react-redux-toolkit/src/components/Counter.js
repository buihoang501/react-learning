import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store.js/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  const addCounterHandler = () => {
    dispatch(counterActions.addCounter(5));
  };
  return (
    <div>
      Counter
      <button onClick={addCounterHandler}>Add Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Counter;
