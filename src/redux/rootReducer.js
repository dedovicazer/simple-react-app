import { combineReducers } from 'redux';
import postsReducer from './posts/reducer.js';
import usersReducer from './users/reducer.js';

const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
});

export default rootReducer;
