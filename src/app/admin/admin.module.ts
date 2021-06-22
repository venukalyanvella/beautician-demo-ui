import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCommonServiceService } from './admin-common-service.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddBeauticianComponent } from './Beautician/add-beautician/add-beautician.component';
import { BeauticianDetailsComponent } from './Beautician/beautician-details/beautician-details.component';
import { AddBeautyparlourComponent } from './Beauty/add-beautyparlour/add-beautyparlour.component';
import { BeautyparlourDetailsComponent } from './Beauty/beautyparlour-details/beautyparlour-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BeautyservicesService } from './services/beautyservices.service';
import { BeautyServicesListComponent } from './Beauty/beauty-services-list/beauty-services-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AuthLoginComponent,
    AddBeauticianComponent,
    BeauticianDetailsComponent,
    AddBeautyparlourComponent,
    BeautyparlourDetailsComponent,
    BeautyServicesListComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule
    
  ],
  providers:[AdminCommonServiceService,BeautyservicesService]
})
export class AdminModule { }
