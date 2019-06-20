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

  ngOnInit() {}

  loginWithGoogle() {
    this.auth.googleLogin();
  }
}
