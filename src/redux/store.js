import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const store = createStore(reducers, {}, applyMiddleware(logger, thunk));

export default store;
