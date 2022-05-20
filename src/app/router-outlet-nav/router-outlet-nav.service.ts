import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
    RouterOutletNavSessionData, RouterOutletNavTab, RouterOutletNavTabData
} from './router-outlet-nav';

// You can adapt the tabs order by changing the order of the routes in a routing module
@Injectable({
  providedIn: 'root'
})
export class RouterOutletNavService {

  public initializeTabs(activatedRoute: ActivatedRoute): RouterOutletNavTab[] {
    const sessionData = activatedRoute.snapshot.data as RouterOutletNavSessionData;
    const session = sessionData.session;

    const routeConfig = activatedRoute.routeConfig;
    if (!routeConfig) {
      return [];
    }

    /**
     * Based on the defined routeConfig we'll generate the tabs.
     */
    const childRoutes = routeConfig.children;
    if (!childRoutes) {
      return [];
    }

    return childRoutes.filter(x => x.path)
      .map(x => {
        const path = x.path!!;
        const data = session[path];

        if (!data) {
          throw Error(`Router outlet nav tab data unavailable for route '${path}'.`);
        }

        const tabData = data as RouterOutletNavTabData;

        return {
          displayName: tabData.displayName,
          routerLink: path,
          selected: false
        } as RouterOutletNavTab;
      });
  }

  public selectTab(url: string, tabs: RouterOutletNavTab[]): void {
    const urlPaths = url.split('/');
    const matchedTabs = tabs.filter(x => urlPaths.find(y => x.routerLink === y));

    /**
     * If the route does not exists we won't change the selected tab state
     * because it could be the case that a child route matches the destination.
     */
    if (matchedTabs.length === 0) {
      return;
    }

    if (matchedTabs.length > 1) {
      throw Error('Only one tab can be selected. Your routing module was misconfigured.');
    }

    const matchedTab = matchedTabs[0];

    tabs.forEach(t => t.selected = t.routerLink === matchedTab.routerLink);
  }
}
