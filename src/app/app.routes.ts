import { Routes, RouterModule } from "@angular/router";

import { MainComponent }  from './main.component';
import { ContactsComponent }  from './contacts.component';

import { AboutComponent }  from './about.component';

const routes: Routes = [
  
  {
    path: 'main',
    component: AboutComponent
  },

  {
    path: 'contacts',
    component: ContactsComponent
  },

  {
    path: 'samples',
    component: MainComponent
  },

  {
    path: '',
    redirectTo: '/samples',
    pathMatch: 'full'
  },

  { 
    path: '**',
    redirectTo: '/samples',
    pathMatch: 'full'
  }
]

export const routing = RouterModule.forRoot(routes);