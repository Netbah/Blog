import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';

export const PostsRoutes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
