import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRegisterRoutingModule } from './module-register-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ModuleRegisterRoutingModule
  ]
})
export class ModuleRegisterModule { }
