import { UI_ACTION_TYPE } from '../../constants';

export const toggleDarkMode = isDarkModeOn => ({
  type: UI_ACTION_TYPE.TOGGLE_DARK_MODE,
  payload: {
    isDarkModeOn,
  }
});

export const setActivePath = path => ({
  type: UI_ACTION_TYPE.SET_ACTIVE_PATH,
  payload: {
    path
  }
})
