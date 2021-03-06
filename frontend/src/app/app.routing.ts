import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { LoginRoutes } from './login/login-routing.module';
import { PostsRoutes } from './posts/posts-routing.module';
import { PostsComponent } from './posts/posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostsComponent, children: PostsRoutes },
  { path: 'login', component: LoginComponent, children: LoginRoutes },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
