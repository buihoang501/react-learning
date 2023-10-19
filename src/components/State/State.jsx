import React, { useState, Fragment } from 'react';

//Why should we use ReactJS
// Compatiable
// Scalable
// Single page application achitecture
// Large comunity
// Maintain
// High performance (Virtual DOM)
// Good working with (Redux/ Flux)
// JSX syntax

const State = () => {
  //Initialize state with useState hook
  const [name, setName] = useState('Chưa có tên');

  const getNameHandler = () => {
    setName('Bùi Ngô Minh Hoàng');
  };

  return (
    <Fragment>
      <div>{name}</div>

      <button onClick={getNameHandler}>Get name!</button>
    </Fragment>
  );
};

export default State;
