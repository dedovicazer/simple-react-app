import PostsApi from '../../apis/postsApi';
import ACTION_TYPES from './actionTypes';
import type {
  GetPostsSuccessAction,
  GetPostsActionFunc,
  GetCommentsSuccessAction,
  GetCommentsActionFunc,
  AddReplaySuccessAction,
  AddReplayActionFunc,
  AddTagFunc,
  CreateTagSuccessAction,
  CreateTagActionFunc,
} from './types';

const getPostsSuccess = (posts): GetPostsSuccessAction => ({
  type: ACTION_TYPES.GET_POSTS,
  posts,
});

export const getPosts: GetPostsActionFunc = () => (dispatch) =>
  PostsApi.getPosts()
    .then(({ data }) => {
      dispatch(getPostsSuccess(data));
    })
    .catch(() => {
      return Promise.reject();
    });

const getCommentsSuccess = (comments): GetCommentsSuccessAction => ({
  type: ACTION_TYPES.GET_COMMENTS,
  comments,
});

export const getComments: GetCommentsActionFunc = () => (dispatch) =>
  PostsApi.getComments()
    .then(({ data }) => {
      dispatch(getCommentsSuccess(data));
    })
    .catch(() => {
      return Promise.reject();
    });

const addReplaySuccess = (data): AddReplaySuccessAction => ({
  type: ACTION_TYPES.ADD_REPLAY,
  data,
});

export const addReplay: AddReplayActionFunc = (commentId, replay) => (
  dispatch,
) =>
  PostsApi.addReplay(commentId, replay)
    .then(({ data }) => {
      dispatch(addReplaySuccess(data));
    })
    .catch(() => {
      return Promise.reject();
    });

export const addTag: AddTagFunc = (commentId, tagId) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.ADD_TAG,
    data: { commentId, tagId },
  });

export const createTagSuccess = (data): CreateTagSuccessAction => ({
  type: ACTION_TYPES.CREATE_TAG,
  data,
});

export const createTag: CreateTagActionFunc = (commentId, tag) => (dispatch) =>
  PostsApi.createTag(commentId, tag)
    .then(({ data }) => {
      dispatch(createTagSuccess(data));
    })
    .catch(() => {
      return Promise.reject();
    });
