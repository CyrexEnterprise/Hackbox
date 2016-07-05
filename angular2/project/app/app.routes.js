"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('./home/home.routes');
exports.routes = home_routes_1.HomeRoutes.slice();
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
