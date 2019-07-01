import { User } from 'app/core/model/User';

export class Post {
  id?: string;
  url: string;
  title: string;
  content?: string;
  active?: boolean;
  commentsCount: number;
  timeToRead: number;
  author: Author;

  constructor() {
    this.commentsCount = 0;
  }
}

export class Author {
  displayName: string;
  photoUrl: string;
  uid: string;
}
