import React, { useReducer } from 'react';

import { reducer } from './reducer';
import { initialState } from './constant';

export const ContextAPI = React.createContext({
  count: 0,
  addNumberHandler: null,
  subtractNumberHandler: null,
});

const ContextAPIProvider = (props) => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  const addNumberHandler = () => {
    dispatch({ type: 'ADD', number: 5 });
  };
  const subtractNumberHandler = () => {
    dispatch({ type: 'SUBTRACT', number: 2 });
  };

  const data = {
    count: counter.count,
    addNumberHandler,
    subtractNumberHandler,
  };

  return (
    <ContextAPI.Provider value={data}>{props.children}</ContextAPI.Provider>
  );
};

export default ContextAPIProvider;
