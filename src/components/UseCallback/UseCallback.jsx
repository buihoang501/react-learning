import React, { useCallback, useState } from 'react';
import ChildUseCallBack from './ChildUseCallBack';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  //   const logger = () => {
  //     console.log('Log something');
  //   };

  const logger = useCallback(() => {
    console.log('Log something');
  }, []);

  const addCounterHandler = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <React.Fragment>
      UseCallback
      <div>
        <button onClick={addCounterHandler}>Add count</button>
        <p>Count:{count}</p>
      </div>
      <ChildUseCallBack logger={logger} />
    </React.Fragment>
  );
};

export default UseCallback;
