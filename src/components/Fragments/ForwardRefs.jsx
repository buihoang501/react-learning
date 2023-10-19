import React, { Fragment, useRef } from 'react';
import Child from './Child';

const ForwardRefs = () => {
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.onClickInput();
  };
  return (
    <Fragment>
      <button onClick={clickHandler}>Click to focus on input!</button>
      <Child ref={inputRef}></Child>;
    </Fragment>
  );
};

export default ForwardRefs;
