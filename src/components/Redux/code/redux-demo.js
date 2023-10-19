//import redux
const redux = require('redux');

//reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return {
    counter: state.counter,
  };
};

//store
const store = redux.createStore(counterReducer);

//get the last state of store
// console.log(store.getState());

//Function listening
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//Listening store's changing
const unsubscribe = store.subscribe(counterSubscriber);

//Trigger action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
