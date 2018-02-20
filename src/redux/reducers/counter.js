import { INCREMENT, DECREMENT, RESET } from '@redux/actions/counter';

/**
 * reducer
 * @param {object} state 初始化状态
 * @param {function} action 处理方法
 */
export default function reducer(state = {count: 0}, action) {
  switch (action.type) {
  case INCREMENT:
    return {count: state.count + 1};
  case DECREMENT:
    return {count: state.count - 1};
  case RESET:
    return {count: 0};
  default:
    return state;
  }
}
