import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}

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
