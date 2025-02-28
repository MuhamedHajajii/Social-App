export interface IUpdatePost {
  message: string;
  post: Post;
}

export interface Post {
  _id: string;
  body: string;
  image: string;
  user: string;
  createdAt: string;
  id: string;
}
