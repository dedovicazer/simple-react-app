export type Post = {
  body: string,
  id: number,
  title: string,
  userId: number,
};

type GeoType = {
  lat: number,
  lng: number,
};

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoType,
};

type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
};

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
};

export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export type Replay = {
  replayId: number,
  commentId: number,
  replay: string,
};

export type Tag = {
  tagId: number,
  tag: string,
};
