import React, { useState, useMemo } from 'react';
import ChildUseMemo from './ChildUseMemo';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const personInfo = {
    name: 'Hoang',
    age: 25,
  };

  const logger = () => {
    console.log(`Test logger with useMemo`);
  };

  const memoizedPersonInfo = useMemo(() => personInfo, []);

  const memoizedLogger = useMemo(() => logger, []);

  const addCounterHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <React.Fragment>
      <ChildUseMemo logger={memoizedLogger} info={memoizedPersonInfo} />
      <div>
        <button onClick={addCounterHandler}>Add number</button>
        <p>{count}</p>
      </div>
    </React.Fragment>
  );
};

export default UseMemo;
