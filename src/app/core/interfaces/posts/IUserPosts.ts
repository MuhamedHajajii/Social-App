export interface IUserPosts {
  message: string;
  paginationInfo: PaginationInfo;
  posts: Post[];
}

export interface Post {
  _id: string;
  body: string;
  image: string;
  user: User;
  createdAt: string;
  comments: any[];
  id: string;
}

export interface User {
  _id: string;
  name: string;
  photo: string;
}

export interface PaginationInfo {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  total: number;
}
