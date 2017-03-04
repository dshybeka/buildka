"use strict";
var router_1 = require("@angular/router");
var main_component_1 = require('./main.component');
var contacts_component_1 = require('./contacts.component');
var routes = [
    {
        path: 'main',
        component: main_component_1.MainComponent
    },
    {
        path: 'contacts',
        component: contacts_component_1.ContactsComponent
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/main'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map