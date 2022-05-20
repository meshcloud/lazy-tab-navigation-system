import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Root2NavSessionResolver } from './root-2-nav-session.resolver';
import { Root2Component } from './root-2.component';

const routes: Routes = [
  {
    path: '',
    component: Root2Component,
    resolve: {
      session: Root2NavSessionResolver
    },
    children: [
      {
        path: 'child-3',
        loadChildren: () => import('./child-3').then(m => m.Child3Module)
      },
      {
        path: 'child-4',
        loadChildren: () => import('./child-4').then(m => m.Child4Module)
      },
      {
        path: 'child-5',
        loadChildren: () => import('./child-5').then(m => m.Child5Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Root2RoutingModule { }
