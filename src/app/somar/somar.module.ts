import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomarComponent } from './components/somar/somar.component';



@NgModule({
  declarations: [SomarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SomarComponent
  ]
})
export class SomarModule { }
