import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmailPasswordCredentials } from 'app/core/model/EmailPasswordCredentials';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  focus;
  focus1;

  errorMessage: string;

  constructor(private authService: AuthService, private _location: Location) {}

  ngOnInit() {}

  async register(form) {
    const { password, repeatPassword, email } = form.value;
    if (password !== repeatPassword) {
      this.errorMessage = 'Passwords are not equel';
      return;
    }
    const creds = new EmailPasswordCredentials();
    creds.email = email;
    creds.password = password;
    try {
      await this.authService.registerNewUser(creds);
      this._location.back();
    } catch (error) {
      this.errorMessage = error;
    }
  }
}
