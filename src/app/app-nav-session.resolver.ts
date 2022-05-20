import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {
    RouterOutletNavSessionData, RouterOutletNavSessionResolver, RouterOutletNavTabData
} from './router-outlet-nav';

@Injectable({
  providedIn: 'root'
})
export class AppNavSessionResolver extends RouterOutletNavSessionResolver {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouterOutletNavSessionData> {

    const sessionData = {} as RouterOutletNavSessionData;

    sessionData['root-1'] = this.getRoot1NavTabData();
    sessionData['root-2'] = this.getRoot2NavTabData();

    return of(sessionData);
  }

  private getRoot1NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Root 1'
    };
  }

  private getRoot2NavTabData(): RouterOutletNavTabData {
    return {
      displayName: 'Root 2'
    };
  }
}