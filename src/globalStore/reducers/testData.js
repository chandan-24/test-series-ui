import produce from 'immer';

import { LOAD_DATA_ACTION_TYPE } from '../../constants';

const INTIAL_STATE = {
  attemptedTestsData: {
    isLoaded: false,
    data: []
  },
  pastTestsData: {
    isLoaded: false,
    data: []
  },
  liveTestData: {
    isLoaded: false,
    data: []
  },
  testReports: {
  },
  runningTest: {
    isLoading: false,
    data:{}
  }
}

export default produce((draftState, action) => {
  switch (action.type) {
    case LOAD_DATA_ACTION_TYPE.LOAD_OVER_TEST: {
      draftState.pastTestsData.isLoaded = true;
      draftState.pastTestsData.data = action.payload.pastTest;
      draftState.attemptedTestsData.isLoaded = true;
      draftState.attemptedTestsData.data = action.payload.attempted;
      return;
    }
    
    default:
      return;
  }
}, INTIAL_STATE);
