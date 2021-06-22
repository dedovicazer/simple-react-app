import ACTION_TYPES from './actionTypes';
import type { UserReducer } from './types';

const initialState = {
  users: [],
};

const reducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};

export default reducer;
