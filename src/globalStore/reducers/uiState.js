export default function(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE': {
      return {
        ...state,
        isDarkModeOn: action.payload.isDarkModeOn,
      };
    }
    default:
      return state;
  }
}
