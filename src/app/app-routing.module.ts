import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:'sign-in',
    component:SigninComponent,
    pathMatch:'full'
  },
{
  path:'sign-up',
  component:SignupComponent,
  pathMatch:'full'
},
{
path:'',
redirectTo:'/sign-in',
pathMatch:'full'
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'about',
  component:AboutComponent
},

{
  path:'user',
  loadChildren:() => import('./user/user.module').then(m => m.UserModule) 
},
{
  path:'beauty',
  loadChildren:()=> import('./Beutician/beautician.module').then(m=>m.BeauticianModule)
},
{
  path:'admin',
  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
