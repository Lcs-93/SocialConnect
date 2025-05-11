import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { Comment } from '../../models/comment.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { CommentService } from '../../services/comment.service';
import { CommentCardComponent } from '../../components/comment-card/comment-card.component';
import { forkJoin, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CommentCardComponent],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  author: User | null = null;
  comments: Comment[] = [];
  loading = true;
  loadingComments = true;
  error: string | null = null;
  commentsError: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      if (postId) {
        this.loadPost(postId);
      } else {
        this.error = 'Invalid post ID';
        this.loading = false;
      }
    });
  }

  loadPost(postId: number): void {
    this.postService.getPost(postId).pipe(
      switchMap(post => {
        this.post = post;
        return forkJoin({
          author: this.userService.getUser(post.userId).pipe(
            catchError(() => of(null))
          ),
          comments: this.commentService.getPostComments(postId)
        });
      })
    ).subscribe({
      next: (result) => {
        this.author = result.author;
        this.comments = result.comments;
        this.loading = false;
        this.loadingComments = false;
      },
      error: (err) => {
        this.error = 'Failed to load post details. Please try again later.';
        this.loading = false;
        console.error('Error fetching post data:', err);
      }
    });
  }
}