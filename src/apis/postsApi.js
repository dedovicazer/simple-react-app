import sendRequest from '../utils/request';
import requestTypes from '../constants/requestTypes';
import type { Post, Comment, Replay, Tag } from './types';

export default class PostsApi {
  static getPosts = (): Promise<Array<Post>> =>
    sendRequest(requestTypes.GET, 'posts');

  static getComments = (): Promise<Array<Comment>> =>
    sendRequest(requestTypes.GET, `comments`);

  static addReplay = (commentId, replay): Promise<Replay> =>
    Promise.resolve({ data: { commentId, replay } });

  static createTag = (commentId, tag): Promise<Tag> =>
    Promise.resolve({ data: { commentId, tag } });
}
