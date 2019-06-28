import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { PostsService } from '../posts.service';
import { Post } from '../model/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts: Post[];

  page: number;
  subs: Subscription;
  constructor(public auth: AuthService, private postsService: PostsService) {
    this.page = 1;
  }

  ngOnInit() {
    this.subs = this.postsService.posts.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
