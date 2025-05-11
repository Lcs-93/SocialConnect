import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { UserByEmailComponent } from './pages/user-by-email/user-by-email.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'user-by-email/:email', component: UserByEmailComponent },
  { path: '**', redirectTo: '' }
];