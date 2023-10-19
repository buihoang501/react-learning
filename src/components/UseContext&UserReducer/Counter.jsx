import React, { useContext } from 'react';

import { ContextAPI } from './ContextAPIProvider';

const Counter = () => {
  const { addNumberHandler, subtractNumberHandler, count } =
    useContext(ContextAPI);

  return (
    <div>
      Counter
      <button onClick={addNumberHandler}>Add number</button>
      <button onClick={subtractNumberHandler}>Subtract number</button>
      <div>Counter: {count}</div>
    </div>
  );
};

export default Counter;
