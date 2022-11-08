import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "@modules/auth/page/login-page.component";
import {RegisterFormComponent} from "@modules/auth/components/register-form/register-form.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginPageComponent
    //component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
