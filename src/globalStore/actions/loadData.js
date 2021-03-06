import { LOAD_DATA_ACTION_TYPE } from '../../constants';

export const loadOverTest = testData => ({
  type: LOAD_DATA_ACTION_TYPE.LOAD_OVER_TEST,
  payload: testData,
});
