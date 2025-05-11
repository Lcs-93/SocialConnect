import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: Post;
  @Input() user: User | null = null;
  
  getExcerpt(): string {
    if (!this.post || !this.post.body) return '';
    return this.post.body.length > 100 
      ? `${this.post.body.substring(0, 100)}...` 
      : this.post.body;
  }
}