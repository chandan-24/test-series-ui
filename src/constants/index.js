export const PATHS = {
  ROOT: '/',
  LOG_IN: '/login',
  DASHBOARD: '/dashboard',
  LIVE_TEST: '/live-test',
  PAST_TEST: '/past-test',
  ATTEMPTED: '/attempted',
  USER_PROFILE: '/profile',
  NOT_FOUND: '/not-found',
}

export const PATHS_WITH_SIDEBAR = [
  '/dashboard', '/live-test', '/past-test', '/attempted'
]

export const PATHS_WITH_HEADER = [
  '/dashboard', '/live-test', '/past-test', '/attempted', '/profile', '/not-found'
]


export const UI_ACTION_TYPE = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  SET_ACTIVE_PATH: 'SET_ACTIVE_PATH',
}

export const USER_STATE_ACTION_TYPE = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT'
}
