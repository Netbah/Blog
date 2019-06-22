import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { User } from 'app/core/model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }
}
