import React, { Fragment } from 'react';
import './global.css';
import classes from './style.module.css';

import styled from 'styled-components';

const Styles = () => {
  const Button = styled.button`
    color: #fff;
    background-color: ${({ redColor }) => (redColor ? 'red' : '#b44e4e')};
    font-size: 1rem;
    outline: none;
    border: none;
    padding: 0.25rem 0.5rem;
    &:hover {
      background-color: #105b72c2;
      color: #e64922;
    }
  `;

  return (
    <Fragment>
      {/* <div className='global-container'></div>; */}
      {/* <div className={classes.container}></div> */}
      <Button redColor> My Styled Button </Button>
    </Fragment>
  );
};

export default Styles;
