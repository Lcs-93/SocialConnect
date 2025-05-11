import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    forkJoin({
      posts: this.postService.getPosts(),
      users: this.userService.getUsers()
    }).subscribe({
      next: (result) => {
        this.posts = result.posts;
        this.users = result.users;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts. Please try again later.';
        this.loading = false;
        console.error('Error fetching data:', err);
      }
    });
  }

  getUserForPost(post: Post): User | null {
    return this.users.find(user => user.id === post.userId) || null;
  }
}