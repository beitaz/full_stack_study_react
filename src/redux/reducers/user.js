import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from '@redux/actions/user';

const initState = {
  isLoading: false,
  user: {},
  errMsg: ''
};

/**
 * reducer
 * @param {object} state 初始化状态
 * @param {function} action 处理方法
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
  case GET_USER_REQUEST:
    return {
      isLoading: true,
      user:{},
      errMsg: ''
    };
  case GET_USER_SUCCESS:
    return {
      isLoading: false,
      user: action.result.data,
      errMsg: ''
    };
  case GET_USER_FAIL:
    return {
      isLoading: false,
      user: {},
      errMsg: '请求错误'
    };
  default:
    return state;
  }
}