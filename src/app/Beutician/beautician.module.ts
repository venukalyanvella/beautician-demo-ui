import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautyRoutingModule } from './beauty-routing.module';
import { BeautyHomeComponent } from './beauty-home/beauty-home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BeautyReportComponent } from './beauty-report/beauty-report.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BeautyHomeComponent, AppointmentListComponent, BeautyReportComponent],
  imports: [
    CommonModule,BeautyRoutingModule,FormsModule
  ]
})
export class BeauticianModule { }
