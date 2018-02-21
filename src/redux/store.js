import combineReducers from '@redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '@redux/middleware/promiseMiddleware';

export default createStore(combineReducers, 
  applyMiddleware(thunkMiddleware,
    promiseMiddleware));