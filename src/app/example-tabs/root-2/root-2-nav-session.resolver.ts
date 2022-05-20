import { Observable, of } from 'rxjs';
import {
    RouterOutletNavSessionData, RouterOutletNavSessionResolver, RouterOutletNavTabData
} from 'src/app/router-outlet-nav';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Root2NavSessionResolver extends RouterOutletNavSessionResolver {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouterOutletNavSessionData> {

    const sessionData = {} as RouterOutletNavSessionData;

    sessionData['child-3'] = this.getChild3NavTabData();
    sessionData['child-4'] = this.getChild4NavTabData();
    sessionData['child-5'] = this.getChild5NavTabData();

    return of(sessionData);
  }

  private getChild3NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Child 3'
    };
  }

  private getChild4NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Child 4'
    };
  }

  private getChild5NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Child 5'
    };
  }
}
