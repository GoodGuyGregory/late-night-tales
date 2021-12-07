import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

const PrimeNGComponents = [
  DataViewModule,
  ButtonModule,
  TabViewModule,
  ProgressBarModule,
  TableModule
];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents]
})
export class PrimengModule { }
