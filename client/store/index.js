import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const history = createHistory();

const initialState = {};

const enhancers = [];
const middlewares = [
  thunk,
  routerMiddleware(history),
];

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
