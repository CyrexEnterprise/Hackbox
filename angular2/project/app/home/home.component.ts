// app/weapons.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription }   from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-home',
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'templates/home.html',
    styleUrls: []
})
export class HomeComponent {
  private componentName = 'HomeComponent';
  private subscription: Subscription;
  private footerHidden:any = false;

  constructor(private baseService: BaseService, public authService: AuthService) {

  	this.subscription = baseService.footerVisible$.subscribe(
      status => {
        console.log(`${status} is the new footer status`);
        this.footerHidden = status;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  menuChange(status) {
  	this.baseService.visibleFooter(status);
  }

  logout() {
    this.authService.logout();
  }
}