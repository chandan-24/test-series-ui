import { USER_STATE_ACTION_TYPE } from '../../constants';

export const userLogIn = userDetails => ({
  type: USER_STATE_ACTION_TYPE.LOGGED_IN,
  payload: {
    userDetails,
  }
});

export const userLogOut = path => ({
  type: USER_STATE_ACTION_TYPE.LOGGED_OUT,
  payload: {
    path
  }
})