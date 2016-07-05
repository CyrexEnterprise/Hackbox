"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('./home/home.routes');
var login_routes_1 = require('./auth/login/login.routes');
exports.routes = login_routes_1.LoginRoutes.concat(home_routes_1.HomeRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_1.AUTH_PROVIDERS
];
