// app/details.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';  
import { Subscription }   from 'rxjs/Subscription';
import { DetailsService } from './details.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-details',
    providers: [DetailsService],
    templateUrl: 'templates/details.html',
    styleUrls: []
})
export class DetailsComponent {  
    private componentName = 'DetailsComponent';
    private details = {
      address: {}
    };

    private error = false;
    private subscription: Subscription;

    constructor(
      private service:DetailsService
    ) {
        
      service.getDetails().subscribe(
        data => { this.details = data.me },
        err => { this.error = true }
      );
    }

    ngOnInit() {
      console.log('init DetailsComponent');
    }

    ngOnDestroy() {
      console.log('destroy DetailsComponent');
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }

    save(e) {
      var d = e.value;
      d.firstname = d.firstname.replace(/\s+/g, '');
      d.lastname = d.lastname.replace(/\s+/g, '');
      d.name = (d.firstname ? d.firstname + " " : "") + d.lastname;

      _.extend(this.details, d);
    }
}