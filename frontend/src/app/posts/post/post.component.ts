import { Component, OnInit, OnDestroy } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PostsService } from '../posts.service';
import { Subscription, Observable } from 'rxjs';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  response: HighlightResult;

  code = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
  })
  export class PostsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
  }`;

  codeCss = `
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`;
  post$: Observable<Post>;
  post: Post;
  subs: Subscription;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.postsService.getByUrl(params.get('url'));
      })
    );
    this.subs = this.post$.subscribe(post => {
      this.post = post;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }
}
