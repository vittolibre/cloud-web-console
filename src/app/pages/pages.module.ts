
import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DeviceComponent } from './device/device.component';
import { EdgeNodeComponent } from './edge-node/edge-node.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Routes, RouterModule } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';
import { HomeComponent } from './home/home.component';
import { DeviceModule } from './device/device.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    RouterModule.forChild(MENU_ITEMS),
    DeviceModule
  ],
  declarations: [
    PagesComponent,
    DeviceComponent,
    EdgeNodeComponent,
    HomeComponent,
  ],
})
export class PagesModule {
}
