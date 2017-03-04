import { Routes, RouterModule } from "@angular/router";
import { NgModule }              from '@angular/core';

import { MainComponent }  from './main.component';
import { JobDetailsComponent }  from './job-details.component';


const jobDetailsRoutes: Routes = [
  
  {

    path: 'main',
    component: MainComponent,
    children: [
      {
        path: ':id',
        component: JobDetailsComponent
      },

      {
        path: '',
        redirectTo: '1',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '1',
        pathMatch: 'full'
      }
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(jobDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }