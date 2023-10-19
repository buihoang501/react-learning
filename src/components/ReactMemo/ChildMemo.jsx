import React from 'react';

const ChildMemo = ({ name }) => {
  console.log('component rerendered');
  return <div>My name's {name}</div>;
};

export default React.memo(ChildMemo);
