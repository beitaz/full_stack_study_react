import counter from './reducers/counter';

export const combineReducers = (state = {}, action) => {
  return {
    counter: counter(state.counter, action)
  };
};