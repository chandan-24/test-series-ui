import produce from 'immer';

import { UI_ACTION_TYPE } from '../../constants';

const INTIAL_STATE = {
  isDarkModeOn: false,
  activePath: '/login',
}

export default produce((draftState, action) => {
  switch (action.type) {
    case UI_ACTION_TYPE.TOGGLE_DARK_MODE: {
      draftState.isDarkModeOn = action.payload.isDarkModeOn;
      return;
    }

    case UI_ACTION_TYPE.SET_ACTIVE_PATH: {
      draftState.activePath = action.payload.path;
      return;
    }
    
    default:
      return;
  }
}, INTIAL_STATE);
