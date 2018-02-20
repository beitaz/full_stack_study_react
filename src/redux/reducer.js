import counter from './reducers/counter';
import user from './reducers/user';

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    user: user(state.user, action)
  };
}