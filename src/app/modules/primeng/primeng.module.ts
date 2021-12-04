import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';


const PrimeNGComponents = [
  DataViewModule,
  ButtonModule,
  TabViewModule,
];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents]
})
export class PrimengModule { }
