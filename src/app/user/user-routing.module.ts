import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';

const route: Routes = [

  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
{
    path:'profile',
    component:ProfileComponent
},

{
  path:'reports',
  component:ReportsComponent
},
{
  path:'bookings',
  component:MybookingsComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
