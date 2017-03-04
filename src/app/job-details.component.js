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
var router_1 = require('@angular/router');
var JOB_ID_TO_IMG_COUNTER = {
    1: { id: 1, name: "",
        details: "<h2>\u0417\u0430\u0431\u043E\u0440\u044B</h2><p>\u0423 \u043D\u0430\u0441 \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u0437\u0430\u0431\u043E\u0440\u044B, \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430.</p>",
        imageDetails: [
            "№ 1 - 3 500 за кв.м.",
            "№ 2 - 500 за кв.м.",
            "№ 3 - 2 500 за кв.м.",
            "№ 4 - 1 500 за кв.м.",
            "№ 5 - 3 400 за кв.м.",
            "№ 6 - 4 500 за кв.м.",
            "№ 7 - 500 за кв.м.",
        ]
    },
    2: { id: 2, name: "",
        details: "<h2>\u041F\u0435\u0440\u0438\u043B\u0430</h2><p>\u0423 \u043D\u0430\u0441 \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0435\u0440\u0438\u043B\u0430, \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430.</p>",
        imageDetails: [
            "№ 1 - 900 р. пог.м.",
            "№ 2 - 1 200 р. пог.м.",
            "№ 3 - 3 000 р.пог.м.",
            "№ 4 - 3 000 р.пог.м.",
            "№ 5 - 800 р. пог.м.",
            "№ 6 - 600 р. пог.м."
        ]
    },
    3: { id: 3, name: "",
        details: "<h2>\u0412\u043E\u0440\u043E\u0442\u0430</h2><p>\u0423 \u043D\u0430\u0441 \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u0432\u043E\u0440\u043E\u0442\u0430, \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430.</p>",
        imageDetails: []
    },
    4: { id: 4, name: "",
        details: "<h2>\u0414\u0432\u0435\u0440\u0438</h2><p>\u0423 \u043D\u0430\u0441 \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u0434\u0432\u0435\u0440\u0438, \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430.</p>",
        imageDetails: []
    },
    5: { id: 5, name: "",
        details: "<h2>\u041A\u043E\u0432\u043A\u0430</h2><p>\u0423 \u043D\u0430\u0441 \u0448\u0438\u043A\u0430\u0440\u043D\u0430\u044F \u043A\u043E\u0432\u043A\u0430, \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430.</p>",
        imageDetails: []
    },
};
var JobDetailsComponent = (function () {
    function JobDetailsComponent(activatedRoute, router, document) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.document = document;
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.jobDetail = JOB_ID_TO_IMG_COUNTER[id];
        });
    };
    JobDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JobDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/templates/job-details.html'
        }),
        core_2.Injectable(),
        __param(2, core_2.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, Object])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());
exports.JobDetailsComponent = JobDetailsComponent;
//# sourceMappingURL=job-details.component.js.map