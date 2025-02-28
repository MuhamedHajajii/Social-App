import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEB_SITE_BASE_URL } from '../../constants/WEB_SITE_BASE_URL';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  createComment(commentData: {}) {
    return this.http.post<any>(`${WEB_SITE_BASE_URL}comments`, commentData);
  }

  updateComment() {}

  deleteComment() {}

  getComments() {}
}
