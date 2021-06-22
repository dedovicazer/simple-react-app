import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Comment from './Comment';
import ReplayList from '../Replay/ReplayList';
import TagList from '../Tag/TagList';
import styles from './styles';
import type { CommentsProps as Props } from './types';

const Comments = ({
  comments,
  classes,
  handleAddReplay,
  replays,
  handleAddTag,
  tags,
}: Props) => (
  <Grid container>
    <Grid item>
      <Typography className={classes.header}>Comments:</Typography>
    </Grid>
    <Grid item>
      {comments.map((comment) => {
        const filteredReplays = replays.filter(
          (item) => item.commentId === comment.id,
        );

        const filteredTags = tags.filter((item) =>
          comment.tagIds.includes(item.tagId),
        );

        return (
          <Grid container className={classes.container} key={comment.id}>
            <Grid item>
              <Comment comment={comment} />
            </Grid>
            <Grid item className={classes.width100}>
              <TagList
                commentId={comment.id}
                tags={filteredTags}
                handleAddTag={handleAddTag}
                allTags={tags}
              />
            </Grid>
            <Grid item className={classes.width100}>
              <ReplayList
                commentId={comment.id}
                handleAddReplay={handleAddReplay}
                replays={filteredReplays}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  </Grid>
);

export default withStyles(styles)(Comments);
