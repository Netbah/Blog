import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  items: { timeToDead: string; description: string; id: number }[];

  page: number;
  constructor(public auth: AuthService) {
    this.page = 1;
  }

  ngOnInit() {
    this.items = [
      {
        id: 1,
        timeToDead: '9 min',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.'
      },
      {
        id: 7,
        timeToDead: '9 min',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.'
      },
      {
        id: 2,
        timeToDead: '9 min',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.'
      },
      {
        id: 3,
        timeToDead: '9 min',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.'
      },
      {
        id: 4,
        timeToDead: '9 min',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.'
      },
      {
        id: 5,
        timeToDead: '9 min',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additionalcontent. This content is a little bit longer.'
      }
    ];
  }
}
