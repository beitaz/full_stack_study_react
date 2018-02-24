import React, { Component } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '@utils/loading';

const Home = Loadable({
  loader: () => import('@components/home' /* webpackChunkName: 'home' */),
  loading: Loading
});
const About = Loadable({
  loader: () => import('@components/about' /* webpackChunkName: 'about' */),
  loading: Loading
});
const Counter = Loadable({
  loader: () => import('@components/counter' /* webpackChunkName: 'counter' */),
  loading: Loading
});
const User = Loadable({
  loader: () => import('@components/user' /* webpackChunkName: 'user' */),
  loading: Loading
});

// import Home from '@components/home';
// import About from '@components/about';
// import Counter from '@components/counter';
// import User from '@components/user';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({isOpened: true});
  }

  closeModal() {
    this.setState({isOpened: false});
  }
  
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/about'>关于</Link></li>
            <li><Link to='/counter'>计数器</Link></li>
            <li><Link to='/user'>用户信息</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/counter' component={Counter}/>
            <Route exact path='/user' component={User}/>
          </Switch>
          <button onClick={this.openModal}>弹出框</button>
          <Modal
            isOpen={this.state.isOpened}>
            <h2>模态框</h2>
            <button onClick={this.closeModal}>关闭模态框</button>
          </Modal>
        </div>
      </Router>
    );
  }
}
