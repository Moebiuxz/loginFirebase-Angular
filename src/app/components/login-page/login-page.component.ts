import { Component, OnInit } from '@angular/core';
import {UsuarioInterface} from '../../interfaces/usuario-interface';
import {AuthService} from '../../services/auth.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {
  usuario: UsuarioInterface = {
    email: '',
    clave: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.loginUser(this.usuario)
      .then(res => {
        console.log(res);
        toastr.success('El usuario ha ingresado correctamente!', 'Inicio correcto!');
      }, err => {
        console.log(err);
      });
  }

}
