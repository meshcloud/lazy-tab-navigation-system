import { Observable } from 'rxjs';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export interface RouterOutletNavTabData {
  displayName: string;
}

export interface RouterOutletNavSessionData {
  [key: string]: RouterOutletNavTabData;
}

export interface RouterOutletResolveNavTabData {
  data: RouterOutletNavSessionData;
}

export abstract class RouterOutletNavSessionResolver implements Resolve<RouterOutletNavSessionData> {

  abstract resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouterOutletNavSessionData>;

}

export interface RouterOutletNavTab {
  displayName: string;
  routerLink: string;
  selected: boolean;
}
