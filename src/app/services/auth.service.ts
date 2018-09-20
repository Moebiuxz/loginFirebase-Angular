import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth) { }

  // Método para registrar usuario con email.
  doRegister(usuario) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }
}
