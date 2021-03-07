export const PATHS = {
  ROOT: '/',
  LOG_IN: '/login',
  DASHBOARD: '/dashboard',
  LIVE_TEST: '/live-test',
  PAST_TEST: '/past-test',
  ATTEMPTED: '/attempted',
  USER_PROFILE: '/profile',
  NOT_FOUND: '/not-found',
  START_TEST: '/test',
}

export const PATHS_WITH_SIDEBAR = [
  '/dashboard', '/live-test', '/past-test', '/attempted'
]

export const PATHS_WITH_HEADER = [
  '/dashboard', '/live-test', '/past-test', '/attempted', '/profile', '/not-found', '/test'
]


export const UI_ACTION_TYPE = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  SET_ACTIVE_PATH: 'SET_ACTIVE_PATH',
}

export const USER_STATE_ACTION_TYPE = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT'
}

export const LOAD_DATA_ACTION_TYPE = {
  LOAD_OVER_TEST: 'LOAD_OVER_TEST',
  LOAD_LIVE_TEST_DATA: 'LOAD_LIVE_TEST_DATA',
  LOAD_TEST_DATA: 'LOAD_TEST_DATA',
  LOAD_TESTS_AGGREGATE: 'LOAD_TESTS_AGGREGATE',
  LOAD_TEST_REPORT: 'LOAD_TEST_REPORT',
}
