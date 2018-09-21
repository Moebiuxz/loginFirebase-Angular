import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginFirebase';
  showSpinner = true;

  constructor(public auth: AuthService) {
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }
}
