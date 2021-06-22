import type { WithStylesProps } from '../types';
import type { Comment, Replay, Tag } from '../../../apis/types';

export type CommentsProps = WithStylesProps & {
  comments: Array<Comment>,
  replays: Array<Replay>,
  tags: Array<Tag>,
  handleAddReplay: (commentId: number, replay: string) => void,
  handleAddTag: (commentId: number, tag: string) => void,
};

export type CommentProps = WithStylesProps & {
  comments: Array<Comment>,
};
