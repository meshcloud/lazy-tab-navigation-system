import { Observable, of } from 'rxjs';
import {
    RouterOutletNavSessionData, RouterOutletNavSessionResolver, RouterOutletNavTabData
} from 'src/app/router-outlet-nav';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Root1NavSessionResolver extends RouterOutletNavSessionResolver {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouterOutletNavSessionData> {

    const sessionData = {} as RouterOutletNavSessionData;

    sessionData['child-1'] = this.getChild1NavTabData();
    sessionData['child-2'] = this.getChild2NavTabData();

    return of(sessionData);
  }

  private getChild1NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Child 1'
    };
  }

  private getChild2NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Child 2'
    };
  }
}
