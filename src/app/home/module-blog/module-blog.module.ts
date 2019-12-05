import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBlogRoutingModule } from './module-blog-routing.module';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    ModuleBlogRoutingModule
  ]
})
export class ModuleBlogModule { }
