import type { WithStylesProps, PostListType } from '../types';

type CommonPostProps = {
  postList: PostListType,
  setSelectedPost: (value: number) => void,
  selectedPost: number,
};

export type FilterPostsProps = WithStylesProps & {
  handleChangeFilterQuery: (event: SyntheticInputEvent<>) => void,
  filterQuery: string,
};

export type PostListProps = FilterPostsProps & CommonPostProps;

export type PostProps = WithStylesProps & CommonPostProps;
