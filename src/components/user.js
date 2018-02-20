import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '@redux/actions/user';

class User extends Component {
  render() {
    const { isLoading, user, errMsg } = this.props.user;
    return (
      <div>
        {
          isLoading ? '正在获取用户信息...' :
            (
              errMsg ? errMsg :
                <div>
                  <p>用户信息：</p>
                  <p>用户名：{user.name}</p>
                  <p>用户昵称：{user.nick}</p>
                </div>
            )
        }
        <button onClick={() => this.props.getUser()}>加载信息</button>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
