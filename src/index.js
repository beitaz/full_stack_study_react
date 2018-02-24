import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '@redux/store';
import Routes from './router';

const renderWithHotReload = Component => {
  // 动态创建根挂载容器（<div></div>)并添加到 body 中
  const appTarget = document.createElement('div');
  document.body.appendChild(appTarget);
  // 设置模态框挂载点
  Modal.setAppElement(appTarget);
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    appTarget
  );
};

/*初始化*/
renderWithHotReload(Routes);

/*热更新*/
if (module.hot) {
  module.hot.accept('./router', () => {
    renderWithHotReload(Routes);
  });
}