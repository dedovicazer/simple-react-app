import ACTION_TYPES from './actionTypes';
import type { PostsReducer } from './types';

const initialState = {
  posts: [],
  comments: [],
  replays: [],
  tags: [],
};

const reducer: PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case ACTION_TYPES.GET_COMMENTS:
      return {
        ...state,
        comments: action.comments.map((item) => ({
          ...item,
          tagIds: [],
        })),
      };

    case ACTION_TYPES.ADD_REPLAY:
      const replayId = Object.keys(state.replays).length + 1;
      return {
        ...state,
        replays: [...state.replays, { ...action.data, replayId }],
      };

    case ACTION_TYPES.ADD_TAG:
      return {
        ...state,
        comments: state.comments.map((item) =>
          item.id === action.data.commentId
            ? { ...item, tagIds: [...item.tagIds, action.data.tagId] }
            : { ...item },
        ),
      };

    case ACTION_TYPES.CREATE_TAG:
      const tagId = state.tags.length + 1;
      return {
        ...state,
        tags: [...state.tags, { ...action.data, tagId }],
        comments: state.comments.map((item) =>
          item.id === action.data.commentId
            ? { ...item, tagIds: [...item.tagIds, tagId] }
            : { ...item },
        ),
      };

    default:
      return state;
  }
};

export default reducer;
