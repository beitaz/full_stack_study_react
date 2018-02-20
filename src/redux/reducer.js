import { combineReducers } from 'redux';
import counter from '@redux/reducers/counter';
import user from '@redux/reducers/user';

export default combineReducers({
  counter,
  user
});