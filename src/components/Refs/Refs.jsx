import React, { useRef } from 'react';

const Refs = () => {
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <button onClick={clickHandler}>Click to focus on input!</button>
      <input type='text' ref={inputRef} />
    </div>
  );
};

export default Refs;
