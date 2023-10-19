const initialUsers = {
  isLoading: false,
  users: [],
  erorr: null,
};

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailed = (message) => {
  return {
    type: FETCH_FAILED,
    payload: message,
  };
};

const usersReducer = (state = initialUsers, action) => {
  if (action.type === FETCH_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === FETCH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload,
      error: null,
    };
  } else if (action.type === FETCH_FAILED) {
    return {
      ...state,
      isLoading: false,
      users: [],
      error: action.payload,
    };
  }
  return state;
};

export const getUsers = () => {
  return async function (dispatch) {
    dispatch(fetchRequest());
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );

      if (!response.ok) return;

      const data = await response.json();

      if (data) {
        const users = data.map((user) => user.name);

        dispatch(fetchSuccess(users));
      }
    } catch (error) {
      dispatch(fetchFailed(error));
    }
  };
};

export default usersReducer;
