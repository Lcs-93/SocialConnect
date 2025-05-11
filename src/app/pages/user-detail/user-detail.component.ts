import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { Post } from '../../models/post.model';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PostCardComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  posts: Post[] = [];
  loading = true;
  loadingPosts = true;
  error: string | null = null;
  postsError: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('id'));
      if (userId) {
        this.loadUser(userId);
      } else {
        this.error = 'Invalid user ID';
        this.loading = false;
      }
    });
  }

  loadUser(userId: number): void {
    this.userService.getUser(userId).subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
        this.loadUserPosts(userId);
      },
      error: (err) => {
        this.error = 'Failed to load user details. Please try again later.';
        this.loading = false;
        console.error('Error fetching user:', err);
      }
    });
  }

  loadUserPosts(userId: number): void {
    this.postService.getUserPosts(userId).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loadingPosts = false;
      },
      error: (err) => {
        this.postsError = 'Failed to load user posts. Please try again later.';
        this.loadingPosts = false;
        console.error('Error fetching user posts:', err);
      }
    });
  }

  getUserInitials(): string {
    if (!this.user || !this.user.name) return '';
    return this.user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}