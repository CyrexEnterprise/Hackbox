"use strict";
var home_component_1 = require('./home.component');
var details_component_1 = require('../details/details.component');
exports.HomeRoutes = [
    { path: '', redirectTo: '/home', terminal: true },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: details_component_1.DetailsComponent
            }
        ]
    }
];
