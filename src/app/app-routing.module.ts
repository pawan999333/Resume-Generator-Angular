import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { SamplesComponent } from './samples/samples.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';

const routes: Routes = [
  { path: '', redirectTo: 'samples', pathMatch: 'full' },
  { path: 'samples', loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule) },
  { path: 'template1', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  { path: 'template2', loadChildren: () => import('./template2/template2.module').then(m => m.Template2Module) },
  { path: 'template3', loadChildren: () => import('./template3/template3.module').then(m => m.Template3Module) },
  { path: 'template4', loadChildren: () => import('./template4/template4.module').then(m => m.Template4Module) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
