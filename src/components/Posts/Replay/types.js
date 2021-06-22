import type { WithStylesProps } from '../types';
import type { Replay } from '../../../apis/types';

export type ReplayProps = WithStylesProps & {
  commentId: number,
  handleAddReplay: (commentId: number, replay: string) => void,
  replays: Array<Replay>,
};
