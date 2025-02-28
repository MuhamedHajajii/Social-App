import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEB_SITE_BASE_URL } from '../../constants/WEB_SITE_BASE_URL';
import { IAllPosts } from '../../interfaces/posts/IAllPosts';
import { IUserPosts } from '../../interfaces/posts/IUserPosts';
import { IPost } from '../../interfaces/posts/IPost';
import { IUpdatePost } from '../../interfaces/posts/IUpdatePost';
import { IDeletePost } from '../../interfaces/posts/IDeletePost';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(page: number = 1) {
    return this.http.get<IAllPosts>(
      `${WEB_SITE_BASE_URL}posts?limit=50?page=${page}`
    );
  }

  getUserPosts(userId: string) {
    return this.http.get<IUserPosts>(
      `${WEB_SITE_BASE_URL}users/${userId}/posts?limit=2`
    );
  }

  getPostById(postId: string) {
    return this.http.get<IPost>(`${WEB_SITE_BASE_URL}posts/${postId}`);
  }

  updatePost(postId: string, postData: FormData) {
    return this.http.put<IUpdatePost>(
      `${WEB_SITE_BASE_URL}posts/${postId}`,
      postData
    );
  }

  createPost(postData: FormData) {
    return this.http.post<{ message: string }>(
      `${WEB_SITE_BASE_URL}posts`,
      postData
    );
  }

  deletePost(postId: string) {
    return this.http.delete<IDeletePost>(`${WEB_SITE_BASE_URL}posts/${postId}`);
  }
}
