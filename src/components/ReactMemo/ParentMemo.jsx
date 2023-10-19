import React, { useState } from 'react';
import ChildMemo from './ChildMemo';

const ParentMemo = () => {
  const [name, setName] = useState('Bui Hoang');
  const [count, setCount] = useState(0);

  const clickCounterHandler = () => {
    setCount((prevCount) => count + 1);
  };

  return (
    <React.Fragment>
      <button onClick={clickCounterHandler}>Counter!</button>
      <p>{count}</p>
      <ChildMemo name={name} />
    </React.Fragment>
  );
};

export default ParentMemo;
