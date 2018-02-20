export const GET_USER_REQUEST = 'user/GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'user/GET_USER_FAIL';

export function getUserRequest() {
  return {type: GET_USER_REQUEST};
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user: user
  };
}

export function getUserFail() {
  return {type: GET_USER_FAIL};
}

export function getUser() {
  return function (dispatch) {
    dispatch(getUserRequest());

    return fetch('http://localhost:8080/api/user.json')
      .then(res => res.json())
      .then(json => dispatch(getUserSuccess(json)))
      .catch(() => dispatch(getUserFail()));
  };
}