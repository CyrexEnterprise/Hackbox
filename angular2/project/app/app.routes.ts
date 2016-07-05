import { provideRouter, RouterConfig } from '@angular/router';
import { HomeRoutes } 				from './home/home.routes';
import { LoginRoutes, AUTH_PROVIDERS }  from './auth/login/login.routes';

export const routes: RouterConfig = [
	...LoginRoutes,
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS
];