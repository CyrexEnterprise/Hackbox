// main entry point
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
// Add these symbols to override the `LocationStrategy`
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { BaseService } from './base.service';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
	BaseService,
	APP_ROUTER_PROVIDERS,
	disableDeprecatedForms(),
  provideForms(),
	{ provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));