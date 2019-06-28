import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../model/post';
import { AuthService } from 'app/core/auth/auth.service';
import { User } from 'app/core/model/User';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnDestroy {
  ckeConfig: any;
  @ViewChild('myckeditor') ckeditor: any;
  mycontent: string;
  post: Post;
  subs: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private AuthService: AuthService
  ) {
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    this.post = new Post();
    this.subs = this.AuthService.user.subscribe((u: User) => {
      this.post.author = {
        uid: u.uid,
        photoUrl: u.photoURL,
        displayName: u.displayName
      };
    });

    // rich text editor config
    this.ckeConfig = {
      allowedContent: false,
      forcePasteAsPlainText: true
    };
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  async create() {
    try {
      await this.postsService.add(this.post);
      this.router.navigate(['/posts']);
    } catch (e) {
      console.error(e);
    }
  }

  onChange($event: any): void {
    console.log('onChange');
    // this.log += new Date() + "<br />";
  }
}
