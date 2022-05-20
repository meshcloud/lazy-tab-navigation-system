import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Root1NavSessionResolver } from './root-1-nav-session.resolver';
import { Root1Component } from './root-1.component';

const routes: Routes = [
  {
    path: '',
    component: Root1Component,
    resolve: {
      session: Root1NavSessionResolver
    },
    children: [
      {
        path: 'child-1',
        loadChildren: () => import('./child-1').then(m => m.Child1Module)
      },
      {
        path: 'child-2',
        loadChildren: () => import('./child-2').then(m => m.Child2Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Root1RoutingModule { }
