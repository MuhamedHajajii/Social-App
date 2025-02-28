import { Component, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommentsService } from '../../../core/services/comments/comments.service';
import { Comment, Post } from '../../../core/interfaces/posts/IAllPosts';

@Component({
  selector: 'app-comments-form',
  imports: [ReactiveFormsModule],
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.css',
})
export class CommentsFormComponent {
  postId = input.required();

  commentForm!: FormGroup;

  fb = inject(FormBuilder);

  commentsService = inject(CommentsService);

  isLoading: boolean = false;

  post = input<any>();

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.commentForm = this.fb.group({
      content: [null],
      post: [this.postId()],
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    console.log(this.commentForm.value);
    this.commentsService.createComment(this.commentForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response);
        this.post().comments = response.comments as Comment[];
      },
    });
  }
}
