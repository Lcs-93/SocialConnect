import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-by-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-by-email.component.html',
  styleUrls: ['./user-by-email.component.scss']
})
export class UserByEmailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const email = params.get('email');
      if (email) {
        this.findUserByEmail(email);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  findUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          this.router.navigate(['/users', users[0].id]);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Error finding user by email:', err);
        this.router.navigate(['/']);
      }
    });
  }
}