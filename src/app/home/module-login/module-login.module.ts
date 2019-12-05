import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleLoginRoutingModule } from './module-login-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ModuleLoginRoutingModule
  ]
})
export class ModuleLoginModule { }
