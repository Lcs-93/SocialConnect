import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  @Input() comment!: Comment;
}