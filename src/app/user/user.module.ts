import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonAuthService } from './common-auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BeautyUserService } from './services/beauty-user.service';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ 
    ProfileComponent, 
     HomeComponent, ReportsComponent, MybookingsComponent],
  imports: [
    CommonModule,UserRoutingModule,HttpClientModule,FormsModule,
    NgxPaginationModule
  ],
  providers:[CommonAuthService,AuthGuard,BeautyUserService],
  exports:[]
})
export class UserModule {
  constructor(){
    console.log('user Module loaded');
    
  }
 }
