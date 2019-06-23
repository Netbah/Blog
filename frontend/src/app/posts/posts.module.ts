import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CoreModule } from 'app/core/core.module';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PostComponent, PostsListComponent, CreatePostComponent, PostsComponent],
  imports: [CommonModule, CoreModule, RouterModule, NgbModule.forRoot()]
})
export class PostsModule {}
