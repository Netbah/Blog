import { User } from 'app/core/model/User';

export class Post {
  $key?: string;
  title: string;
  content?: string;
  timeStamp?: number;
  active?: boolean;
  creationDate: Date;
  commentsCount: number;

  timeToRead: number;
  author: Author;

  constructor() {
    this.commentsCount = 0;
    this.creationDate = new Date();
  }
}

export class Author {
  displayName: string;
  photoUrl: string;
  uid: string;
}
