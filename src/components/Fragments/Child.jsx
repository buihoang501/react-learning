import React, { useRef, useImperativeHandle } from 'react';

const Child = (props, ref) => {
  const inputRef = useRef();

  const clickInputHandler = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      onClickInput: clickInputHandler,
    };
  });

  return (
    <div>
      <button onClick={clickInputHandler}>Click to focus on input 2!</button>
      <input type='text' ref={inputRef} />
    </div>
  );
};

export default React.forwardRef(Child);
