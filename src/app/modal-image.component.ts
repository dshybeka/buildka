import { Component, Input, EventEmitter, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { JobDetails }  from './model/job-details';

import {MaterializeAction} from 'angular2-materialize';

@Component({
    selector: 'modal-image',
    templateUrl: 'templates/modal-image.html'
})
@Injectable()
export class ModalImageComponent {

  @Input() jobDetailId:Number;
  @Input() index:Number;
  @Input() alt:string;

  imageId: string;
  modalId: string;
  modalImgId: string;

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {

      this.imageId = "image-id" + this.jobDetailId + "-" + this.index;
      this.modalId = "modal-id" + this.jobDetailId + "-" + this.index;
      this.modalImgId = "img01" + this.jobDetailId + "-" + this.index;
  }

  ngAfterViewChecked() {

      // var modal = document.getElementById(this.modalId);

      // var img = document.getElementById(this.imageId);

      // if (img != null &&  modal != undefined) {

      //   var modalImg: HTMLImageElement = <HTMLImageElement>document.getElementById(this.modalImgId);
      //   var captionText = document.getElementById("caption");
      //   img.onclick = function(){
      //       modal.style.display = "block";
      //       modalImg.src = (<HTMLImageElement>this).src;
      //       captionText.innerHTML = (<HTMLImageElement>this).alt;
      //   }

      //   modal.onclick = function() { 
      //       modal.style.display = "none";
      //   }
      // }
     
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {

    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {

    if (this.modalActions != undefined) {
      
      this.modalActions.emit({action:"modal",params:['close']});
    }
  }
  clearClose(smth) {

    smth[0].style.zIndex = "-30000";
  }
  
}
