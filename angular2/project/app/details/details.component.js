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
// app/details.component.ts
var core_1 = require('@angular/core');
var details_service_1 = require('./details.service');
var _ = require('lodash');
var DetailsComponent = (function () {
    function DetailsComponent(service) {
        var _this = this;
        this.service = service;
        this.componentName = 'DetailsComponent';
        this.details = {
            address: {}
        };
        this.error = false;
        service.getDetails().subscribe(function (data) { _this.details = data.me; }, function (err) { _this.error = true; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        console.log('init DetailsComponent');
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        console.log('destroy DetailsComponent');
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    DetailsComponent.prototype.save = function (e) {
        var d = e.value;
        d.firstname = d.firstname.replace(/\s+/g, '');
        d.lastname = d.lastname.replace(/\s+/g, '');
        d.name = (d.firstname ? d.firstname + " " : "") + d.lastname;
        _.extend(this.details, d);
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            providers: [details_service_1.DetailsService],
            templateUrl: 'templates/details.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [details_service_1.DetailsService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
