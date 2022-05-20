import { of, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { RouterOutletNavTab } from './router-outlet-nav';
import { RouterOutletNavService } from './router-outlet-nav.service';

export type RouterOutletNavStyleClass = 'nav-root' | 'nav-child';

@Component({
  selector: 'mst-router-outlet-nav',
  templateUrl: './router-outlet-nav.component.html',
  styleUrls: ['./router-outlet-nav.component.scss']
})
export class RouterOutletNavComponent implements OnInit, OnDestroy {

  @Input()
  public readonly styleClass: RouterOutletNavStyleClass = 'nav-child';

  public tabs: RouterOutletNavTab[];

  private sub: Subscription;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly routerOutletNavService: RouterOutletNavService
  ) {
    this.tabs = this.routerOutletNavService.initializeTabs(this.activatedRoute);
  }

  ngOnInit() {
    /**
     * Select initial tab and navigate to child route.
     */
    const routerLink = this.setupInitialliySelectedTab();
    this.routerOutletNavService.selectTab(routerLink, this.tabs)

    /**
     * We listen to the router events to select the specific tab.
     */
    this.sub = this.router.events
      .pipe(
        filter(x => x instanceof NavigationEnd),
        switchMap((x: NavigationEnd) => {
          /**
           * If the firstChild is available then we don't determine the first child tab.
           */
          if (this.activatedRoute.firstChild) {
            return of(x.urlAfterRedirects);
          }

          /**
           * If child route doesn't exists then we'll determine the child route and select the tab.
           */
          return this.navigateToFirstChildRoute();
        })
      )
      .subscribe({
        next: (routerLink: string) => this.routerOutletNavService.selectTab(routerLink, this.tabs)
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private setupInitialliySelectedTab(): string {
    /**
     * If childs are applied for example in case of redirection then we'll use the existing destination url.
     */
    const currentUrl = this.router.url;
    if (this.activatedRoute.firstChild) {
      return currentUrl;
    }
    return this.navigateToFirstChildRoute();
  }

  private navigateToFirstChildRoute(): string {
    const routerLink = this.tabs[0].routerLink;

    const extras = {
      relativeTo: this.activatedRoute,
      replaceUrl: true
    };

    this.router.navigate(['./', routerLink], extras);

    return routerLink;
  }
}
