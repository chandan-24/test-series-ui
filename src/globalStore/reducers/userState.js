import produce from 'immer';

import { USER_STATE_ACTION_TYPE } from '../../constants';

const INTIAL_STATE = {
  isLoggedIn: false,
  userDetails: {},
}

export default produce((draftState, action) => {
  switch (action.type) {
    case USER_STATE_ACTION_TYPE.LOGGED_IN: {
      draftState.isLoggedIn = true;
      draftState.userDetails = action.payload.userDetails;
      return;
    }

    case USER_STATE_ACTION_TYPE.LOGGED_OUT: {
      draftState.isLoggedIn = false;
      draftState.userDetails = {};
      return;
    }
    
    default:
      return;
  }
}, INTIAL_STATE);
