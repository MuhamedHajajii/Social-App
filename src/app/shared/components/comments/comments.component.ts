import { Component, input, SimpleChanges } from '@angular/core';
import { Post } from '../../../core/interfaces/posts/IAllPosts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [DatePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  post = input.required<Post>();
  ngOnChanges(changes: SimpleChanges): void {
    this.post().comments.reverse();
  }
}
