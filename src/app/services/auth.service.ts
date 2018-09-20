import { Injectable } from '@angular/core';
import { FirebaseAuthService} from 'firebase-angular2/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: FirebaseAuthService) { }

  logout() {
    return this.afAuth.firebase.
  }
}
