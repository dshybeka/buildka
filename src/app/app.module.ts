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
import { ModalImageComponent }  from './modal-image.component';

import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  imports: [ BrowserModule, ScrollSpyModule.forRoot(), routing, MainRoutingModule, MaterializeModule ],
  declarations: [ AppComponent, ContactsComponent, MainComponent, JobDetailsComponent, HeaderComponent, ModalImageComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
