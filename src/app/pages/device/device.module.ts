import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { TemperatureWidgetComponent } from '../dashboard/temperature/temperature-widget/temperature-widget.component';
import { HumiditywidgetComponent } from '../dashboard/humiditywidget/humiditywidget.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { MENU_ITEMS } from '../pages-menu';



@NgModule({
  declarations: [
    DeviceDetailComponent,
    TemperatureWidgetComponent,
    HumiditywidgetComponent
  ],
  imports: [
    CommonModule,
    NgxGaugeModule,
    NbCardModule,
    NbLayoutModule,
    RouterModule.forChild(MENU_ITEMS),
  ]
})
export class DeviceModule { }
