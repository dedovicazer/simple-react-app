import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import type { PostProps as Props } from './types';

const Post = ({ post, classes, setSelectedPost, selectedPost }: Props) => (
  <Grid
    container
    className={classNames(classes.postContainer, {
      [classes.selectedPost]: post.id === selectedPost,
    })}
    onClick={() => setSelectedPost(post.id)}
  >
    <Grid item className={classes.postItem}>
      <Typography className={classes.postTitle}>Title: {post.title}</Typography>
    </Grid>
    <Grid item className={classes.postItem}>
      <Typography className={classes.postUsername}>
        Username: {post.userName}
      </Typography>
    </Grid>
    <Grid item className={classes.postItem}>
      <Typography className={classes.postBody}>{post.body}</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Post);
