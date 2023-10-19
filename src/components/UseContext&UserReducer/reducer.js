import { initialState } from './constant';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...initialState,
        count: state.count + action.number,
      };
    }
    case 'SUBTRACT': {
      return {
        ...initialState,
        count: state.count - action.number,
      };
    }
    default:
      return initialState;
  }
};
