import type { WithStylesProps } from '../types';
import type { Tag } from '../../../apis/types';

export type TagProps = WithStylesProps & {
  commentId: number,
  tags: Array<Tag>,
  allTags: Array<Tag>,
  handleAddTag: (commentId: number, tag: string) => void,
};
