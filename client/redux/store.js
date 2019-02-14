import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from './middlewares/logger';
import router from './middlewares/router';
import reducers from './reducers';


const middlewares = [thunk, router, logger];


export default (initialState = {}) => (
  createStore(reducers, initialState, applyMiddleware(...middlewares))
);
