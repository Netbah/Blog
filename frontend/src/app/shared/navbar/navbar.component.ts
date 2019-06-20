import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  user: IUser;

  constructor(public location: Location, private element: ElementRef, private auth: AuthService) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function() {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  isHome() {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === '/home') {
      return true;
    } else {
      return false;
    }
  }
  showSignUp() {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/signup') {
      return false;
    } else if (this.user) {
      return false;
    } else {
      return true;
    }
  }
  showUserProfile() {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/user-profile') {
      return false;
    }
    if (!this.user) {
      return false;
    } else {
      return true;
    }
  }

  signOut() {
    this.auth.signOut();
  }

  showSignOut() {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
}
