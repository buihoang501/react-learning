import React, { useEffect, useState, Fragment } from 'react';

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  //Runs on every component render (re-rendering/ re-evaluated)

  useEffect(() => {
    console.log('Runs on every render');
  });

  //Runs only on the first render

  useEffect(() => {
    console.log('Runs only on the first render');
  }, []);

  //Runs when depedencies changed
  useEffect(() => {
    console.log('Runs on every the counter state changed');
  }, [counter]);

  //Using clean up function to avoid memory leak problems
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      console.log(`Use effect with clean up function ${counter}`);
    }, 2000);

    return () => {
      console.log(`Clear effect ${counter}`);
      clearTimeout(timeOutId);
    };
  }, [counter]);

  const clickCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <Fragment>
      <div>
        <h2>UseEffect</h2>
        <button onClick={clickCounterHandler}>Click to set counter +1!</button>
        <p>Counter: {counter}</p>
      </div>
    </Fragment>
  );
};

export default UseEffect;
