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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_scrollspy_1 = require('ng2-scrollspy');
var app_routes_1 = require('./app.routes');
var job_details_routes_1 = require('./job-details.routes');
var app_component_1 = require('./app.component');
var main_component_1 = require('./main.component');
var contacts_component_1 = require('./contacts.component');
var job_details_component_1 = require('./job-details.component');
var header_component_1 = require('./header.component');
var modal_image_component_1 = require('./modal-image.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_scrollspy_1.ScrollSpyModule.forRoot(), app_routes_1.routing, job_details_routes_1.MainRoutingModule],
            declarations: [app_component_1.AppComponent, contacts_component_1.ContactsComponent, main_component_1.MainComponent, job_details_component_1.JobDetailsComponent, header_component_1.HeaderComponent, modal_image_component_1.ModalImageComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map