
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DeviceComponent } from './device/device.component';
import { EdgeNodeComponent } from './edge-node/edge-node.component';
import { DeviceDetailComponent } from './device/device-detail/device-detail.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
   
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'nodes',
      component: EdgeNodeComponent,
    },
    {
      path: 'devices',
      component: DeviceComponent,
    },
    {
      path: 'device-detail',
      component: DeviceDetailComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
