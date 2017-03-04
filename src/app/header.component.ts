import { NgModule, Component, Injectable, AfterViewInit } from '@angular/core';

import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

@Component({
    selector: 'scrollable-header',
    templateUrl: 'templates/header.html'
})
export class HeaderComponent implements AfterViewInit {

  top: String;

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() { 
        this.scrollSpyService.getObservable('window').subscribe((e: any) => {
            this.top = "100px";

        });
    }
}
