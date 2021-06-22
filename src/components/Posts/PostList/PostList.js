import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Post from './Post';
import FilterPosts from './FilterPosts';
import styles from './styles';
import type { PostListProps as Props } from './types';

const PostList = ({
  postList,
  setSelectedPost,
  selectedPost,
  handleChangeFilterQuery,
  filterQuery,
  classes,
}: Props) => (
  <Grid container>
    <Grid item className={classes.postItem}>
      <Typography className={classes.header}>Posts:</Typography>
    </Grid>
    <Grid item>
      <FilterPosts
        filterQuery={filterQuery}
        handleChangeFilterQuery={handleChangeFilterQuery}
      />
    </Grid>
    <Grid item>
      {postList.map((post) => (
        <Post
          key={post.id}
          post={post}
          setSelectedPost={setSelectedPost}
          selectedPost={selectedPost}
        />
      ))}
    </Grid>
  </Grid>
);

export default withStyles(styles)(PostList);
