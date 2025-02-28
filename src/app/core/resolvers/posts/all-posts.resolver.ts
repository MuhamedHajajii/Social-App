import { ResolveFn } from '@angular/router';
import { IAllPosts } from '../../interfaces/posts/IAllPosts';
import { PostsService } from './../../services/posts/posts.service';
import { inject } from '@angular/core';

export const allPostsResolver: ResolveFn<IAllPosts> = (route, state) => {
  const postsService = inject(PostsService);

  return postsService.getAllPosts();
};
