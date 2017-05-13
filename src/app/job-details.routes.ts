import { Routes, RouterModule } from "@angular/router";
import { NgModule }              from '@angular/core';

import { MainComponent }  from './main.component';
import { JobDetailsComponent }  from './job-details.component';


const jobDetailsRoutes: Routes = [
  
  {

    path: 'samples',
    component: MainComponent,
    children: [
      {
        path: ':id',
        component: JobDetailsComponent
      },
      {
        path: '',
        component: JobDetailsComponent
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