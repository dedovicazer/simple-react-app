import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { getUsers } from '../../redux/users/actions';
import {
  getPosts,
  getComments,
  addReplay,
  addTag,
  createTag,
} from '../../redux/posts/actions';
import PostList from './PostList/PostList';
import Comments from './Comments/Comments';
import getPostList from './utils';
import styles from './styles';
import type { Props } from './types';

const Container = ({ classes }: Props) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterQuery, setFilterQuery] = useState('');

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);
  const users = useSelector((state) => state.usersReducer.users);
  const comments = useSelector((state) => state.postsReducer.comments);
  const replays = useSelector((state) => state.postsReducer.replays);
  const tags = useSelector((state) => state.postsReducer.tags);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getComments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeFilterQuery = ({
    target: { value },
  }: SyntheticInputEvent<>): void => {
    setFilterQuery(value);
  };

  const handleAddReplay = (commentId: number, replay: string): void => {
    dispatch(addReplay(commentId, replay));
  };

  const handleAddTag = (commentId: number, tag: string): void => {
    const tagFromList = tags.find((item) => item.tag === tag);

    if (tagFromList) {
      dispatch(addTag(commentId, tagFromList.tagId));
    } else {
      dispatch(createTag(commentId, tag));
    }
  };

  const postList = getPostList(posts, users);

  const filteredPostList =
    filterQuery !== ''
      ? postList.filter((item) =>
          item.userName.toLowerCase().includes(filterQuery.toLowerCase()),
        )
      : postList;

  const filteredComments = selectedPost
    ? comments.filter((item) => item.postId === selectedPost)
    : [];

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={6} className={classes.rootItem}>
        <PostList
          postList={filteredPostList}
          setSelectedPost={setSelectedPost}
          selectedPost={selectedPost}
          filterQuerry={filterQuery}
          handleChangeFilterQuery={handleChangeFilterQuery}
        />
      </Grid>
      <Grid item xs={6} className={classes.rootItem}>
        {comments?.length ? (
          <Comments
            comments={filteredComments}
            handleAddReplay={handleAddReplay}
            replays={replays}
            handleAddTag={handleAddTag}
            tags={tags}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Container);
