import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '@redux/store';
import Routes from './router';

const renderWithHotReload = Component => {
  // 设置模态框挂载点
  Modal.setAppElement(document.getElementById('app'));
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
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