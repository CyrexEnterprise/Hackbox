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
// app/weapons.component.ts
var core_1 = require('@angular/core');
var base_service_1 = require('../base.service');
var auth_service_1 = require('../auth/auth.service');
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent(baseService, authService) {
        var _this = this;
        this.baseService = baseService;
        this.authService = authService;
        this.componentName = 'HomeComponent';
        this.footerHidden = false;
        this.subscription = baseService.footerVisible$.subscribe(function (status) {
            console.log(status + " is the new footer status");
            _this.footerHidden = status;
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    HomeComponent.prototype.menuChange = function (status) {
        this.baseService.visibleFooter(status);
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            providers: [],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'templates/home.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [base_service_1.BaseService, (typeof (_a = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
