import type { Classes } from 'react-jss';
import type { Post } from '../../apis/types';

export type WithStylesProps = {|
  classes: Classes,
|};

export type Props = WithStylesProps;

export type PostListType = Post & {
  userName: string,
};
