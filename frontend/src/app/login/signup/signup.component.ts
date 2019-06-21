import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(() => {
      console.log('sdf');
    });
  }

  loginWithGoogle() {
    this.auth.googleLogin();
  }

  loginWithFacebook() {
    this.auth.facebookLogin();
  }

  loginWithTwitter() {
    this.auth.twitterLogin();
  }
}
