import UsersApi from '../../apis/usersApi';
import ACTION_TYPES from './actionTypes';
import type { GetUsersSuccessAction, GetUsersActionFunc } from './types';

const getUsersSuccess = (users): GetUsersSuccessAction => ({
  type: ACTION_TYPES.GET_USERS,
  users,
});

export const getUsers: GetUsersActionFunc = () => (dispatch) =>
  UsersApi.getUsers()
    .then(({ data }) => {
      dispatch(getUsersSuccess(data));
    })
    .catch(() => {
      return Promise.reject();
    });
