import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Translator } from 'angular-translator';
import { AuthService } from 'app/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    formLogin : FormGroup;
    respuesta:any;

    constructor(public fb: FormBuilder,
                public authService: AuthService, 
                private router: Router,
                private translator: Translator) { 
        this.formLogin = this.fb.group({
            email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            password: ['', [Validators.required]]
          });

    }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    login() {
       const val = this.formLogin.value;
       this.authService.SignIn(val.email, val.password).then((value) => {
            this.mostrarCode(value);
       })
    }

    mostrarCode(value: any) {
        this.respuesta = value;
        this.translator.translate('No existe registro de usuario correspondiente a este identificador. Es posible que el usuario haya sido eliminado.').then((translation) => this.respuesta = translation);
    }
}

