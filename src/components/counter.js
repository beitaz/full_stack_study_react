import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../redux/store';
import { decrement, increment, reset } from '../redux/actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为: {store.getState().counter.count}</div>
        <button onClick={() => {
          store.dispatch(increment());
          this.setState(store.getState().counter);
          // eslint-disable-next-line
          console.log('调用自增函数');
        }}>自增
        </button>
        <button onClick={() => {
          store.dispatch(decrement());
          this.setState(store.getState().counter);
          // eslint-disable-next-line
          console.log('调用自减函数');
        }}>自减
        </button>
        <button onClick={() => {
          store.dispatch(reset());
          this.setState(store.getState().counter);
          // eslint-disable-next-line
          console.log('调用重置函数');
        }}>重置
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);