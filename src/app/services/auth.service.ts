import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor( public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  // Método para registrar usuario con email.
  doRegister(usuario: any) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.clave)
        .then(res => {
          this.sendPasswordReset(usuario.email);
          resolve(res);
        }, err => reject(err));
    });
  }

  sendPasswordReset(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }

  loginUser(usuario: any) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.clave)
        .then(res => {
          console.log(res);
          resolve(res);
        }, err => reject(err));
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signOut()
        .then(res => {
          console.log(res);
          resolve(res);
        }, err => reject(err));
    });
  }

  public isUserOn() {
    return firebase.auth().currentUser;
  }
}
