import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required,Validators.email]),
        name: new FormControl('', [Validators.required,Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)])
      },
      {
        validators:passwordMatchValidator
      }
    )
  }

}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassowrd = formCurrent.get('password')?.value;
  const valuePassowrdConfirm = formCurrent.get('passwordConfirm')?.value;
  return(valuePassowrd === valuePassowrdConfirm) ? null : {'mismatch': true}
}
