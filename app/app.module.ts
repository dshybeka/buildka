import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollSpyModule } from 'ng2-scrollspy';

import { routing } from './app.routes';

import {MainRoutingModule} from './job-details.routes'

import { AppComponent }  from './app.component';

import { MainComponent }  from './main.component';
import { ContactsComponent }  from './contacts.component';
import { JobDetailsComponent }  from './job-details.component';
import { HeaderComponent }  from './header.component';

@NgModule({
  imports: [ BrowserModule, ScrollSpyModule.forRoot(), routing, MainRoutingModule ],
  declarations: [ AppComponent, ContactsComponent, MainComponent, JobDetailsComponent, HeaderComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
