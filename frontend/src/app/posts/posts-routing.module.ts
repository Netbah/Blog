import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';

export const PostsRoutes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'create', component: CreatePostComponent },
  { path: ':id', component: PostComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
