import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import html2canvas from 'html2canvas';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UrlComponent } from './url/url.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { SamplesComponent } from './samples/samples.component'; // Import MatMenuModule
import { RouterModule } from '@angular/router';
import { Template2Component } from './template2/template2.component';
import { LoginComponent } from './login/login.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    UrlComponent,
    SamplesComponent,
    Template2Component,
    LoginComponent,
    Template3Component,
    Template4Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot({}),
    MatDialogModule,
    MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatIconModule,
MatTooltipModule,
MatOptionModule,
MatMenuModule,
MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
