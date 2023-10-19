import React from 'react';
import { NameContext } from './Context';

const ChildContext = () => {
  return (
    <div>
      <NameContext.Consumer>
        {(value) => <p>My name: {value.name}</p>}
      </NameContext.Consumer>
    </div>
  );
};

export default ChildContext;
