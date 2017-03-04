import { Routes, RouterModule } from "@angular/router";

import { MainComponent }  from './main.component';
import { ContactsComponent }  from './contacts.component';

const routes: Routes = [
  
  {
    path: 'main',
    component: MainComponent
  },

  {
    path: 'contacts',
    component: ContactsComponent
  },

  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },

  { 
    path: '**',
    redirectTo: '/main'
  }
]

export const routing = RouterModule.forRoot(routes);