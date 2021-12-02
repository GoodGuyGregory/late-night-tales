import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

const PrimeNGComponents = [
  DataViewModule,
  ButtonModule,
  TabViewModule

];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents]
})
export class PrimengModule { }
