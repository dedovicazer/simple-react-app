import type { Post, User } from '../../apis/types';
import type { PostListType } from './types';

const getPostList = (posts: Array<Post>, users: Array<User>): PostListType => {
  if (!posts || !users) return [];

  return posts.map((item) => {
    const userName = users.find((user) => user.id === item.userId)?.username;

    return {
      ...item,
      userName: userName || '',
    };
  });
};

export default getPostList;
