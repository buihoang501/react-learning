import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  const style = {
    position: 'absolute',
    zIndex: '20',
    background: 'green',
    height: '400px',
  };
  return <div style={style}>Modal Component</div>;
};

const Portals = () => {
  return (
    <div>
      Portals
      {ReactDOM.createPortal(<Modal />, document.getElementById('portal'))}
    </div>
  );
};

export default Portals;
