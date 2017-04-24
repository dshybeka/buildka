import { NgModule, Component, Injectable, AfterViewInit } from '@angular/core';

import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

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
        this.scrollSpyService.getObservable('window').subscribe((e: any) => {
            this.top = "100px";

        });

        setInterval (() => {
         
         if (this.counter == 1) {
            this.handleShow1();
          } else {

            if (this.counter == 2) {
              this.handleShow2();
            } else {

              if (this.counter == 3) {
                console.log("show3");
                this.handleShow3();
              }
            }
          }
         

        }, 10000)
    }

  handleShow1() {

      this.counter = 2;


    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
  }
  handleShow2() {

      this.counter = 3;

    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
  }
  handleShow3() {

      this.counter = 1;

    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
  }
}
