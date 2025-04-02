import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SamplesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SamplesComponent } // Define the route for SamplesComponent
    ])
  ],
  exports:[
    SamplesComponent
  ]
})
export class SamplesModule { }
