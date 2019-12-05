import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHomeRoutingModule } from './module-home-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ModuleHomeRoutingModule
  ]
})
export class ModuleHomeModule { }
