import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  email: string;
  password: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [
        Validators.required,
        // - de 8 à 15 caractères
        // - au moins une lettre minuscule
        // - au moins une lettre majuscule
        // - au moins un chiffre
        // - au moins un de ces caractères spéciaux: $ @ % * + - _ !
        // - aucun autre caractère possible: pas de & ni de { par exemp
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
      ]],
      remember: ['']
    }
    );
  }

login(): void{
  if ( this.loginform.get('email').value !== '' && this.loginform.get('password').value !== ''){
    console.log('identifiant passe');
  }
    }
}
