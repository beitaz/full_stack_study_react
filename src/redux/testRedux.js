import store from './store';
import { increment, decrement, reset } from '@redux/actions/counter';

// eslint-disable-next-line
console.log('初始的 state 值: ' + store.getState().counter.count + '\n');

const unsubscribe = store.subscribe(() => {
  // eslint-disable-next-line
  console.log('解除订阅后的 state 值: ' + store.getState().counter.count + '\n');
});

// 发起一系列 action
store.dispatch(increment());
// eslint-disable-next-line
console.log('自增后的 state 值: ' + store.getState().counter.count + '\n');

store.dispatch(decrement());
// eslint-disable-next-line
console.log('自减后的 state 值: ' + store.getState().counter.count + '\n');

store.dispatch(reset());
// eslint-disable-next-line
console.log('重置后的 state 值: ' + store.getState().counter.count + '\n');

// 停止监听 state 更新事件
unsubscribe();

// 1. 使用 cd ./scr/redux 切换到 redux 目录下
// 2. 使用 node_modules/.bin/webpack testRedux.js build.js 编译脚本
// 3. 使用 node build.js 即可查看输出结果