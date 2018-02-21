import axios from 'axios';

/**
 * `store => next => action => {}` 箭头函数(Arrow Function) 等同于:
 * function logger(store) {
 * |  return function wrapDispatchToAddLogging(next) {
 * |  |  return function dispatchAndLog(action) {
 * |  |  |  console.log('dispatching', action)
 * |  |  |  let result = next(action)
 * |  |  |  console.log('next state', store.getState())
 * |  |  |  return result
 * |  |  }
 * |  }
 * }
 * 详情参考 (Middleware)[https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md]
 */
export default store => next => action => {
  const {dispatch, getState} = store;

  /* 如果dispatch来的是一个function，此处不做处理，直接进入下一级 */
  if (typeof(action) === 'function') {
    action(dispatch, getState);
    return;
  }
  /* 解析action */
  const {promise, types, afterSuccess} = action;

  /* 没有promise，证明不是想要发送ajax请求的，就直接进入下一步啦 */
  if (!action.promise) {
    return next(action);
  }

  /* 解析types */
  const [REQUEST, SUCCESS, FAILURE] = types;

  /* 开始请求的时候，发一个action */
  next({
    type: REQUEST
  });

  /* 定义请求成功时的方法 */
  const onFulfilled = result => {
    next({
      result,
      type: SUCCESS
    });
    if(afterSuccess ) {
      afterSuccess(dispatch, getState, result);
    }
  };

  /* 定义请求失败时的方法 */
  const onRejected = error => {
    next({
      error,
      type: FAILURE
    });
  };

  return promise(axios).then(onFulfilled, onRejected)
    .catch(error => {
      // eslint-disable-next-line
      console.log('MIDDLEWARE ERROR:'+ error);
      onRejected(error);
    });
};