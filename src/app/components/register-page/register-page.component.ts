import { Component, OnInit } from '@angular/core';
import {UsuarioInterface} from '../../interfaces/usuario-interface';
import {AuthService} from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import * as toastr from 'toastr';

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

  tryRegister( forma: NgForm) {
    this.authService.doRegister(this.usuario)
      .then(res => {
        console.log(res);
        toastr.success('El usuario ha sido registrado correctamente!', 'Registro correcto!');
        forma.reset();
      }, err => {
        console.log(err);
      });
  }
}
