import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  focus;
  focus1;
  errorMessage: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  async forgotPassword(form) {
    try {
      await this.authService.forgotPassword(form.value.email);
    } catch (error) {
      this.errorMessage = error || 'Some error heppend!';
    }
  }
}
