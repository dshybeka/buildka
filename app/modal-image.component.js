"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ModalImageComponent = (function () {
    function ModalImageComponent(document) {
        this.document = document;
    }
    ModalImageComponent.prototype.ngOnInit = function () {
        this.imageId = "image-id" + this.jobDetailId + "-" + this.index;
        this.modalId = "modal-id" + this.jobDetailId + "-" + this.index;
        this.modalImgId = "img01" + this.jobDetailId + "-" + this.index;
    };
    ModalImageComponent.prototype.ngAfterViewChecked = function () {
        // Get the modal
        var modal = document.getElementById(this.modalId);
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById(this.imageId);
        var modalImg = document.getElementById(this.modalImgId);
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
        // Get the <span> element that closes the modal
        // var span = <HTMLElement>document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        modal.onclick = function () {
            modal.style.display = "none";
        };
    };
    ModalImageComponent.prototype.handleClose = function () {
        document.getElementById(this.modalId).style.display = 'none';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ModalImageComponent.prototype, "jobDetailId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ModalImageComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalImageComponent.prototype, "alt", void 0);
    ModalImageComponent = __decorate([
        core_1.Component({
            selector: 'modal-image',
            templateUrl: 'app/templates/modal-image.html'
        }),
        core_2.Injectable(),
        __param(0, core_2.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Object])
    ], ModalImageComponent);
    return ModalImageComponent;
}());
exports.ModalImageComponent = ModalImageComponent;
//# sourceMappingURL=modal-image.component.js.map