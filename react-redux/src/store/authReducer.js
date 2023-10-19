const initialAuth = {
  isAuthenticated: false,
};

const authReducer = (state = initialAuth, action) => {
  if (action.type === 'AUTH') {
    return {
      isAuthenticated: !state.isAuthenticated,
    };
  }
  return state;
};

export default authReducer;
