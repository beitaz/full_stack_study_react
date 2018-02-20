import combineReducers from '@redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default createStore(combineReducers, applyMiddleware(thunkMiddleware));