import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import styles from './styles';
import type { TagProps as Props } from './types';

const TagList = ({
  classes,
  commentId,
  tags,
  allTags,
  handleAddTag,
}: Props) => {
  const [tagValue, setTagValue] = useState(null);

  const handleChangeTagValue = (
    e: SyntheticInputEvent<>,
    newValue: string,
  ): void => {
    setTagValue(newValue);
  };

  const handleSubmit = (): void => {
    if (
      tagValue &&
      tagValue !== '' &&
      !tags.find((item) => item.tag === tagValue)
    ) {
      handleAddTag(commentId, tagValue);
      setTagValue('');
    }
  };

  return (
    <Grid container direction="column" className={classes.tagListContainer}>
      <Grid item className={classes.tagChips}>
        {tags.map((item) => (
          <Chip size="small" label={item.tag} />
        ))}
      </Grid>
      <Grid item>
        <form>
          <Grid container>
            <Grid item className={classes.tagField}>
              <Autocomplete
                id="add-tag"
                freeSolo
                autoComplete
                value={tagValue}
                onChange={handleChangeTagValue}
                onInputChange={handleChangeTagValue}
                options={allTags.map((option) => option.tag)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="post-tag"
                    label="Post Tag"
                    size="small"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Button onClick={handleSubmit} color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(TagList);
