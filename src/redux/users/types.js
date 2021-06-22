import type { Dispatch, Reducer } from 'redux';
import type { User } from '../../apis/types';
import ACTION_TYPES from './actionTypes';

export type GetUsersSuccessAction = {
  type: typeof ACTION_TYPES.GET_USERS,
  users: Array<User>,
};

export type GetUsersActionFunc = () => (
  dispatch: Dispatch<GetUsersSuccessAction>,
) => Promise<void>;

export type UsersReducerState = {
  users: Array<User>,
};

type UserAction = GetUsersSuccessAction;

export type UsersReducer = Reducer<UsersReducerState, UserAction>;
