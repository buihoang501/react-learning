import React from 'react';

export const NameContext = React.createContext({
  name: 'Hoang',
});

const Context = ({ children }) => {
  const nameObj = {
    name: 'Bùi Hoàng',
  };

  return (
    <NameContext.Provider value={nameObj}>{children}</NameContext.Provider>
  );
};

export default Context;
