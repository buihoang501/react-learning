import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    return {
      ...initialState,
      count: state.count + action.number,
    };
  } else if (action.type === 'SUBTRACT') {
    return {
      ...initialState,
      count: state.count - action.number,
    };
  }

  return initialState;
};

const UseReducer = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const plusCountHandler = () => {
    dispatch({ type: 'ADD', number: 5 });
  };

  const minusCountHandler = () => {
    dispatch({ type: 'SUBTRACT', number: 2 });
  };

  return (
    <div>
      <h2>User Reducer</h2>
      <p>Counter: {counter.count}</p>
      <button onClick={plusCountHandler}>Plus count</button>
      <button onClick={minusCountHandler}>Minus count</button>
    </div>
  );
};

export default UseReducer;
