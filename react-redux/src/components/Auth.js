import React from 'react';
import { connect } from 'react-redux';

const Auth = ({ isAuthendicated, toggleShow }) => {
  return (
    <div>
      Auth
      <button onClick={toggleShow}>Toggle Real Thing</button>
      {isAuthendicated && <p>You are out of money!</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthendicated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShow: () => {
      dispatch({ type: 'AUTH' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
