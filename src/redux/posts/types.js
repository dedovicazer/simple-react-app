import type { Dispatch, Reducer } from 'redux';
import type { Post, Comment, Replay, Tag } from '../../apis/types';
import ACTION_TYPES from './actionTypes';

export type GetPostsSuccessAction = {
  type: typeof ACTION_TYPES.GET_POSTS,
  posts: Array<Post>,
};

export type GetPostsActionFunc = () => (
  dispatch: Dispatch<GetPostsSuccessAction>,
) => Promise<void>;

export type GetCommentsSuccessAction = {
  type: typeof ACTION_TYPES.GET_COMMENTS,
  comments: Array<Comment>,
};

export type GetCommentsActionFunc = () => (
  dispatch: Dispatch<GetCommentsSuccessAction>,
) => Promise<void>;

export type AddReplaySuccessAction = {
  type: typeof ACTION_TYPES.ADD_REPLAY,
  data: Replay,
};

export type AddReplayActionFunc = (
  commentId: number,
  replay: string,
) => (dispatch: Dispatch<AddReplaySuccessAction>) => Promise<void>;

export type AddTagFunc = (
  commentId: number,
  tagId: number,
) => {
  type: typeof ACTION_TYPES.ADD_TAG,
  data: { commentId: number, tagId: number },
};

export type CreateTagSuccessAction = {
  type: typeof ACTION_TYPES.CREATE_TAG,
  data: Tag,
};

export type CreateTagActionFunc = (
  commentId: number,
  tag: string,
) => (dispatch: Dispatch<CreateTagSuccessAction>) => Promise<void>;

export type PostsReducerState = {
  posts: Array<Post>,
  comments: Array<Comment>,
  replays: Array<Replay>,
  tags: Array<Tag>,
};

type PostAction =
  | GetPostsSuccessAction
  | GetCommentsSuccessAction
  | AddReplaySuccessAction
  | AddTagFunc
  | CreateTagSuccessAction;

export type PostsReducer = Reducer<PostsReducerState, PostAction>;
