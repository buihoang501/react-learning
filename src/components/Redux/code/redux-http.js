const redux = require('redux');
const { applyMiddleware, createStore } = redux;
const thunk = require('redux-thunk').default;
const reduxLogger = require('redux-logger');
const { logger } = reduxLogger;
const axios = require('axios');

//Initial state
const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

//Action type
const GET_REQUEST = 'GET_REQUEST';
const GET_SUCCESS = 'GET_SUCCESS';
const GET_ERROR = 'GET_ERROR';

//Action creators
const getUsersRequest = () => {
  return {
    type: GET_REQUEST,
    payload: null,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: GET_SUCCESS,
    payload: users,
  };
};

const getUserError = (error) => {
  return {
    type: GET_ERROR,
    payload: error,
  };
};

//Reducer
const fetchReducer = (state = initialState, action) => {
  if (action.type === GET_REQUEST) {
    return {
      ...initialState,
      isLoading: true,
    };
  } else if (action.type === GET_SUCCESS) {
    return {
      ...initialState,
      users: action.payload,
      isLoading: false,
      error: null,
    };
  } else if (action.type === GET_ERROR) {
    return {
      ...initialState,
      users: [],
      isLoading: false,
      error: action.payload,
    };
  }
  return initialState;
};

//Thunk async middleware
//store
const store = createStore(fetchReducer, applyMiddleware(thunk, logger));

const fetchDatas = () => {
  return async function (dispatch) {
    dispatch(getUsersRequest());
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      const users = response.data.map((user) => user.id);

      dispatch(getUsersSuccess(users));
    } catch (error) {
      dispatch(getUserError(error.message));
    }
  };
};
// const getUsers = () => {
//   return function (dispatch) {
//     dispatch(getUsersRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         const users = response.data.map((user) => user.id);
//         dispatch(getUsersSuccess(users));
//       })
//       .catch((error) => {
//         dispatch(getUserError(error.message));
//       });
//   };
// };

//Subscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//dispatch
store.dispatch(fetchDatas());

//Unsubscribe
unsubscribe();
