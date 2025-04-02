import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Template2Component } from './template2.component';


@NgModule({
  declarations: [Template2Component],
  imports: [
    CommonModule,
       RouterModule.forChild([
              { path: '', component: Template2Component } // Define the route for SamplesComponent
            ]),
              MatDialogModule,
                MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatTooltipModule,
            MatOptionModule,
            MatMenuModule,
            FormsModule,
            MatProgressSpinnerModule
  ],
  exports:[Template2Component]
})
export class Template2Module { }
