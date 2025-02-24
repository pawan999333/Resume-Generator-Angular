import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { SamplesComponent } from './samples/samples.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';

const routes: Routes = [
  { path: '', redirectTo: 'samples', pathMatch: 'full' },
  { path: 'samples', component: SamplesComponent },
  {path:'template1',
    component:TemplateComponent
  },
  {path:'template2',
    component:Template2Component
  },
  {path:'template3',
    component:Template3Component
  },
  {path:'template4',
    component:Template4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
