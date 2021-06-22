import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import type { CommentProps as Props } from './types';

const Comment = ({ comment, classes }: Props) => (
  <Grid container className={classes.commentContainer}>
    <Grid item className={classes.commentItem}>
      <Typography className={classes.commentName}>
        Name: {comment.name}
      </Typography>
    </Grid>
    <Grid item className={classes.commentItem}>
      <Typography className={classes.commentBody}>{comment.body}</Typography>
    </Grid>
    <Grid item className={classes.commentItem}>
      <Typography className={classes.commentEmail}>{comment.email}</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Comment);
