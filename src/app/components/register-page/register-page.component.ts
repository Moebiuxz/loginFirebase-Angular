import { Component, OnInit } from '@angular/core';
import {UsuarioInterface} from '../../interfaces/usuario-interface';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: []
})
export class RegisterPageComponent implements OnInit {
  usuario: UsuarioInterface = {
    email: '',
    clave: ''
  };

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }

  tryRegister() {
    this.authService.doRegister(this.usuario)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
