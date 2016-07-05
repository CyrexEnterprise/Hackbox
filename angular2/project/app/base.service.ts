import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class BaseService {

  // Observable string sources
  private footerVisibleSource = new Subject<string>();

  // Observable string streams
  footerVisible$ = this.footerVisibleSource.asObservable();

  // Service message commands
  visibleFooter(status: any) {
    this.footerVisibleSource.next(status);
  }

}