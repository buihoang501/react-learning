import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './authReducer';
import counterReducer from './counterReducer';

import usersReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
