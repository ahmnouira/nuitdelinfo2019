import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {path: '', component : HomeComponent, children :[

    {path: '', loadChildren: './home/module-home/module-home.module#ModuleHomeModule'},
    {path:'blog', loadChildren: './home/module-blog/module-blog.module#ModuleBlogModule'},
    {path:'login', loadChildren: './home/module-login/module-login.module#ModuleLoginModule'},
    {path:'register', loadChildren: './home/module-register/module-register.module#ModuleRegisterModule'},
    {path:'contact', loadChildren: './home/module-contact/module-contact.module#ModuleContactModule'}
  
  ]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
