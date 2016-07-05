"use strict";
// main entry point
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
// Add these symbols to override the `LocationStrategy`
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
])
    .catch(function (err) { return console.error(err); });
