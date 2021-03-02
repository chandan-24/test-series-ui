import produce from "immer";

const INTIAL_STATE = {
  isDarkModeOn: false
}

export default produce((draftState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE': {
      draftState.isDarkModeOn = action.payload.isDarkModeOn;
      return;
    }
    
    default:
      return;
  }
}, INTIAL_STATE);
