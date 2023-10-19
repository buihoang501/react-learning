const initialCounter = {
  count: 0,
};

const counterReducer = (state = initialCounter, action) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  return state;
};

export default counterReducer;
