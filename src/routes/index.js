import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Counter from '../components/counter';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/about'>关于</Link></li>
            <li><Link to='/counter'>计数器</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/counter' component={Counter}/>
          </Switch>
        </div>
      </Router>
    );
  }
}