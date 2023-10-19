import React, { useContext } from 'react';
import { NameContext } from './Context';

const ChildContextNoWrapper = () => {
  const { name } = useContext(NameContext);
  return (
    <div>
      <NameContext.Consumer>
        {(value) => <p>My name: {value.name}</p>}
      </NameContext.Consumer>
      <p>Name with useContext: {name}</p>
    </div>
  );
};

export default ChildContextNoWrapper;
