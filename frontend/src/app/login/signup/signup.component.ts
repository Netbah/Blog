import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { EmailPasswordCredentials } from 'app/core/model/EmailPasswordCredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  errorMessage: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  loginWithFacebook() {
    this.authService.facebookLogin();
  }

  loginWithTwitter() {
    this.authService.twitterLogin();
  }

  async login(form) {
    const { password, email } = form.value;
    const creds = new EmailPasswordCredentials();
    creds.email = email;
    creds.password = password;
    try {
      await this.authService.emailLogin(creds);
      this.router.navigate(['/']);
    } catch (error) {
      this.errorMessage = error;
    }
  }
}
