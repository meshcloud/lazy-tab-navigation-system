import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Child5Component } from './child-5.component';

const routes: Routes = [
  {
    path: '',
    component: Child5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child5RoutingModule { }