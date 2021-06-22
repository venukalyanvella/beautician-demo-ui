import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddBeauticianComponent } from './Beautician/add-beautician/add-beautician.component';
import { BeauticianDetailsComponent } from './Beautician/beautician-details/beautician-details.component';
import { AddBeautyparlourComponent } from './Beauty/add-beautyparlour/add-beautyparlour.component';
import { BeautyServicesListComponent } from './Beauty/beauty-services-list/beauty-services-list.component';
import { BeautyparlourDetailsComponent } from './Beauty/beautyparlour-details/beautyparlour-details.component';

const routes:Routes =[
    {
        path:'dashboard',
        component:AdminDashboardComponent,
        pathMatch:'full'
    },
    {
        path:'add-beautician',
        component:AddBeauticianComponent,
        pathMatch:'full'
    },
    {
        path:'add-beauty-parlour',
        component:AddBeautyparlourComponent,
        pathMatch:'full'
    },
    {
        path:'beautician-list',
        component:BeauticianDetailsComponent,
        pathMatch:'full'
    },
    {
        path:'beautyparlour-list',
        component:BeautyparlourDetailsComponent,
        pathMatch:'full'

    },
    {
        path:'beautyservice-list',
        component:BeautyServicesListComponent,
        pathMatch:'full'
    },
    {
        path:'profile',
        component:AdminProfileComponent,
        pathMatch:'full'
    }
]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  