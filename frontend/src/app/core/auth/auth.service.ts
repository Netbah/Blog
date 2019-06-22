import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { environment } from 'environments/environment';
import { EmailPasswordCredentials } from '../model/EmailPasswordCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<IUser>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private _location: Location
  ) {
    if (!environment.production) {
      this.user = of({
        uid: 'sdfsdfsdf',
        email: 'user.email@gmsdf.df',
        displayName: 'Mock User',
        photoURL:
          'https://lh3.googleusercontent.com/-4DNikZAjt5o/AAAAAAAAAAI/AAAAAAAAbsQ/vitlnLqj1rI/photo.jpg'
      });
    }
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  public facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  public twitterLogin() {
    const provider = new auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  public registerNewUser(credentials: EmailPasswordCredentials) {
    return new Promise(async (resolve, reject) => {
      try {
        let credential: firebase.auth.UserCredential;
        credential = await this.afAuth.auth.createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
        this.updateUserData(credential.user);
        resolve();
      } catch (error) {
        reject(error.message);
      }
    });
  }

  public async emailLogin(credentials: EmailPasswordCredentials) {
    return new Promise(async (resolve, reject) => {
      try {
        let credential: firebase.auth.UserCredential;
        credential = await this.afAuth.auth.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
        this.updateUserData(credential.user);
        resolve();
      } catch (error) {
        reject(error.message);
      }
    });
  }

  public forgotPassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.updateUserData(credential.user);
      this._location.back();
    });
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
