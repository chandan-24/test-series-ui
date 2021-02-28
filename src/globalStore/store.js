import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise)
));
