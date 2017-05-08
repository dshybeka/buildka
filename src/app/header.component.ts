import { NgModule, Component, Injectable, AfterViewInit, EventEmitter } from '@angular/core';

import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

import {MaterializeAction} from 'angular2-materialize';

@Component({
    selector: 'scrollable-header',
    templateUrl: 'templates/header.html'
})
export class HeaderComponent implements AfterViewInit {

  top: String;

  show1: Boolean = true;
  show2: Boolean = false;
  show3: Boolean = false;

  counter: Number = 2;

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() { 
        // this.scrollSpyService.getObservable('window').subscribe((e: any) => {
        //     this.top = "100px";

        // });

        setInterval (() => {
         
         if (this.counter == 1) {
            this.handleShow1();
          } else {

            if (this.counter == 2) {
              this.handleShow2();
            } else {

              if (this.counter == 3) {
                this.handleShow3();
              }
            }
          }
         

        }, 100000)
    }

  modalActions = new EventEmitter<string|MaterializeAction>();
  handleShow1() {

    this.modalActions.emit({ action: 'carousel', params: ['set', 0] });
    this.counter = 2;
  }
  handleShow2() {

      this.modalActions.emit({ action: 'carousel', params: ['set', 1] });
      this.counter = 3;
  }
  handleShow3() {

      this.modalActions.emit({ action: 'carousel', params: ['set', 2] });
      this.counter = 1;
  }
}
