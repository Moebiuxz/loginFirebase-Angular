import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor( public auth: AuthService) {
    setTimeout(1000);
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().then(res => {
      console.log(res);
      console.log('Cerró sesión');
    }).catch(err => {
      console.log(err);
    });
  }
}
