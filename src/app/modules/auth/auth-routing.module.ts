import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "@modules/auth/page/login-page.component";

const routes: Routes = [ //TODO http://localhost/auth/
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'register',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
