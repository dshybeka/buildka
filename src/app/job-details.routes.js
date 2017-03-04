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
var router_1 = require("@angular/router");
var core_1 = require('@angular/core');
var main_component_1 = require('./main.component');
var job_details_component_1 = require('./job-details.component');
var jobDetailsRoutes = [
    {
        path: 'main',
        component: main_component_1.MainComponent,
        children: [
            {
                path: ':id',
                component: job_details_component_1.JobDetailsComponent
            },
            {
                path: '',
                redirectTo: '1',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '1',
                pathMatch: 'full'
            }
        ]
    },
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(jobDetailsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=job-details.routes.js.map