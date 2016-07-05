"use strict";
var home_component_1 = require('./home.component');
var dummy_component_1 = require('../dummy.component');
exports.HomeRoutes = [
    { path: '', redirectTo: '/home', terminal: true },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: dummy_component_1.DummyComponent
            }
        ]
    }
];
