//Redux
const redux = require('redux');
//middleware,   combineReducers
const { applyMiddleware, combineReducers, createStore } = redux;
// redux-logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

// Initial cake state
const initialCake = {
  cake: 20,
};
// Initial ice-cream state
const initialIceCream = {
  iceCream: 15,
};

//Cake reducer
const cakeReducer = (state = initialCake, action) => {
  if (action.type === 'BUY_CAKE') {
    return {
      ...initialCake,
      cake: state.cake - 1,
    };
  }

  return initialCake;
};

//Ice Cream reducer
const iceCreamReducer = (state = initialIceCream, action) => {
  if (action.type === 'BUY_ICECREAM') {
    return {
      ...initialIceCream,
      iceCream: state.iceCream - 1,
    };
  }

  return initialIceCream;
};

//Root reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//Store
const store = createStore(rootReducer, applyMiddleware(logger));

// Subscribe

const unsubscribe = store.subscribe(() => {
  //get lastest state
  console.log(store.getState());
});

// Dispatch action
store.dispatch({ type: 'BUY_CAKE' });
store.dispatch({ type: 'BUY_CAKE' });
store.dispatch({ type: 'BUY_ICECREAM' });
store.dispatch({ type: 'BUY_CAKE' });
store.dispatch({ type: 'BUY_ICECREAM' });
store.dispatch({ type: 'BUY_CAKE' });
store.dispatch({ type: 'BUY_ICECREAM' });

//Unsubsribe store
unsubscribe();
