import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

const Counter = ({ counter, addCounterHandler }) => {
  //   const dispatch = useDispatch();
  //   const counter = useSelector((state) => state.counter.count);

  //   const addCounterHandler = () => {
  //     dispatch({ type: 'ADD', payload: 5 });
  //   };

  return (
    <div>
      <button onClick={addCounterHandler}>Add Counter</button>

      <p>Count: {counter}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCounterHandler: () => {
      dispatch({ type: 'ADD', payload: 5 });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
