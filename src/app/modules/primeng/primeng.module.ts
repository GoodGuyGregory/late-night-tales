import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { ProgressBarModule } from 'primeng/progressbar';

const PrimeNGComponents = [
  DataViewModule,
  ButtonModule,
  TabViewModule,
  ProgressBarModule
];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents]
})
export class PrimengModule { }
