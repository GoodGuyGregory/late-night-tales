import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';

const PrimeNGComponents = [
  DataViewModule
];

@NgModule({
  imports: [PrimeNGComponents],
  exports: [PrimeNGComponents]
})
export class PrimengModule { }
