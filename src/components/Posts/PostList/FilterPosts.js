import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import type { FilterPostsProps as Props } from './types';

const FilterPosts = ({
  filterQuery,
  handleChangeFilterQuery,
  classes,
}: Props) => (
  <Grid container item className={classes.filterQuery}>
    <TextField
      classes={{ root: classes.filterTextField }}
      id="filter-posts"
      label="Filter Posts by Username"
      variant="outlined"
      size="small"
      value={filterQuery}
      onChange={handleChangeFilterQuery}
    />
  </Grid>
);

export default withStyles(styles)(FilterPosts);
