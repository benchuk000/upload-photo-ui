import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as authActions from '../actions/auth';
import rootReducer from '../reducers/index';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const generateStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    store.dispatch(authActions.signInUserByToken(localStorage.token));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default generateStore;