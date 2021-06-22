import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BeautyHomeComponent } from './beauty-home/beauty-home.component';
import { BeautyReportComponent } from './beauty-report/beauty-report.component';

const routes:Routes =[
    {
        path:'beautician-home',
        component:BeautyHomeComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'appointment',
        component:AppointmentListComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'beauty-report',
        component:BeautyReportComponent,
        pathMatch:'full'
    }

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class BeautyRoutingModule{

}