import { Component, Input } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { JobDetails }  from './model/job-details';

@Component({
    selector: 'modal-image',
    templateUrl: 'app/templates/modal-image.html'
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

          // Get the modal
      var modal = document.getElementById(this.modalId);

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById(this.imageId);

      var modalImg: HTMLImageElement = <HTMLImageElement>document.getElementById(this.modalImgId);
      var captionText = document.getElementById("caption");
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = (<HTMLImageElement>this).src;
          captionText.innerHTML = (<HTMLImageElement>this).alt;
      }

      // Get the <span> element that closes the modal
      // var span = <HTMLElement>document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      modal.onclick = function() { 
          modal.style.display = "none";
      }
  }

  handleClose() {

    document.getElementById(this.modalId).style.display='none'
  }
}
