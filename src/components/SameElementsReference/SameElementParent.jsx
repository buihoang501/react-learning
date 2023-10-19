import React, { Fragment, useState } from 'react';

const SameElementParent = ({ children }) => {
  const [count, setCount] = useState(0);
  const addCountHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <Fragment>
      {children}

      <div>
        <button onClick={addCountHandler}>Click add count</button>
        <p>Count: {count}</p>
      </div>
    </Fragment>
  );
};

export default SameElementParent;
