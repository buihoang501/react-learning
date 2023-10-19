import React, { useState } from 'react';

const Events = () => {
  const [name, setName] = useState('');
  const [blurStyle, setBlurStyle] = useState({});

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameBlurHandler = () => {
    setBlurStyle({
      borderColor: 'red',
    });
  };

  return (
    <div>
      <label>Fullname</label>
      <input
        style={blurStyle}
        onBlur={nameBlurHandler}
        type='text'
        value={name}
        onChange={nameChangeHandler}
      />
      <p>Your name: {name ? name : 'None'}</p>
    </div>
  );
};

export default Events;
