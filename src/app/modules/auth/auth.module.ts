import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [ //TODO componentes, pipes, directivas
    LoginPageComponent
  ],
  imports: [ //TODO otros modulos
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
