import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import type { ReplayProps as Props } from './types';

const ReplayList = ({
  classes,
  commentId,
  handleAddReplay,
  replays,
}: Props) => {
  const [replay, setReplay] = useState('');

  const handleChangeReplay = ({
    target: { value },
  }: SyntheticInputEvent<>): void => {
    setReplay(value);
  };

  const handleSubmit = (): void => {
    if (replay !== '') {
      handleAddReplay(commentId, replay);
      setReplay('');
    }
  };

  return (
    <Grid container direction="column" className={classes.replayListContainer}>
      {Object.values(replays).map((item) => (
        <Grid item className={classes.replayItem}>
          <Typography component="span" className={classes.replay}>
            {item.replay}
          </Typography>
        </Grid>
      ))}
      <Grid item className={classes.replaySubmitItem}>
        <form>
          <TextField
            id="post-replay"
            label="Post Replay"
            multiline
            size="small"
            variant="outlined"
            className={classes.replayField}
            value={replay}
            onChange={handleChangeReplay}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ReplayList);
