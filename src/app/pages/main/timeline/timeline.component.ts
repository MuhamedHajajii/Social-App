import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAllPosts } from '../../../core/interfaces/posts/IAllPosts';
import { DatePipe } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { PostsService } from '../../../core/services/posts/posts.service';
import { CommentsComponent } from '../../../shared/components/comments/comments.component';
import { CommentsFormComponent } from '../../../shared/components/comments-form/comments-form.component';
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  imports: [
    DatePipe,
    InfiniteScrollDirective,
    CommentsComponent,
    CommentsFormComponent,
    FormsModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  file!: File;

  postContent: string = '';

  allPosts!: IAllPosts;

  activatedRoute = inject(ActivatedRoute);

  postsService = inject(PostsService);

  ngOnInit(): void {
    this.getAllPosts();
    initFlowbite();
  }

  onFileSelect(e: any) {
    // console.log(e.target.files[0]);
    this.file = e.target.files[0];
    console.log(this.file);
  }

  getAllPosts(): void {
    this.allPosts = this.activatedRoute.snapshot.data['testerC44'];
  }

  currentPage = 1;
  isLoading: boolean = false;
  onScroll() {
    this.isLoading = true;
    console.log('scrolled!!');
    this.currentPage++;
    this.postsService.getAllPosts(this.currentPage).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.allPosts.posts.push(...response.posts);
      },
    });
  }

  createPost(): void {
    console.log(this.postContent);
    console.log(this.file);
    const formData = new FormData();
    formData.append('body', this.postContent);
    formData.append('image', this.file, this.file.name);
    this.postsService.createPost(formData).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllPosts();
      },
    });
  }
}
