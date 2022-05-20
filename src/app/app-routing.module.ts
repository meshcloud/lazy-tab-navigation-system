import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppNavSessionResolver } from './app-nav-session.resolver';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      session: AppNavSessionResolver
    },
    children: [
      {
        path: 'root-1',
        loadChildren: () => import('./example-tabs/root-1').then(m => m.Root1Module)
      },
      {
        path: 'root-2',
        loadChildren: () => import('./example-tabs/root-2').then(m => m.Root2Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
