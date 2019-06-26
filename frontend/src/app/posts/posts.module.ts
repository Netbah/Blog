import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CoreModule } from 'app/core/core.module';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent, PostsListComponent, CreatePostComponent, PostsComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    NgbModule.forRoot(),
    HighlightModule,
    CKEditorModule,
    FormsModule
  ]
})
export class PostsModule {}
