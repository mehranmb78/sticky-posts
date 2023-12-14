import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', component: PostsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
