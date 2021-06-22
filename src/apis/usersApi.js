import sendRequest from '../utils/request';
import requestTypes from '../constants/requestTypes';
import type { User } from './types';

export default class UsersApi {
  static getUsers = (): Promise<Array<User>> =>
    sendRequest(requestTypes.GET, 'users');
}
