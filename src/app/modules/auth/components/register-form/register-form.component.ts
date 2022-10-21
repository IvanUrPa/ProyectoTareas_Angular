import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthTestService} from "@modules/auth/services/auth-test.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthTestService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', {
          validators:[Validators.required, Validators.email],
          asyncValidators:this.authService.uniqueEmailValidator(),
          updateOn:'blur'
        }),
        name: new FormControl('', [Validators.required,Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required,Validators.minLength(3)]),
        aboutMe: new FormControl('', [Validators.required,Validators.minLength(3)]),
        /*
        password: new FormControl('', [Validators.required, Validators.minLength(3)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)])
        */
      },
      {
        validators:passwordMatchValidator
      }
    )

    //* Propiedades individuales sobre el campo phone vs propiedades sobre todos los controles
    // const formControlPhone = this.registerForm.get('phone') as FormControl;
    // formControlPhone.valueChanges.subscribe((res)=> {
      this.registerForm.valueChanges.subscribe((res)=> {
      console.log('ok', res)
    })

  }

  //* Test de la carga
  testLoaded():void{
    const mockData = {
      email: 'test@test.com',
      name: 'Ivan',
      lastName: 'Urbano',
      phone: '5555555555',
      aboutMe: 'Hola soy Angular developer'
    }
    this.registerForm.setValue(mockData)
  }

  //* Test de la carga
  testUploaded():void{
    const mockData = {
      phone: '1111111111',
    }
    this.registerForm.patchValue(mockData)
  }

}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassowrd = formCurrent.get('password')?.value;
  const valuePassowrdConfirm = formCurrent.get('passwordConfirm')?.value;
  return(valuePassowrd === valuePassowrdConfirm) ? null : {'mismatch': true}
}
