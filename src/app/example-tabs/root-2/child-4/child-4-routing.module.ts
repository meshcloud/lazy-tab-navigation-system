import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Child4Component } from './child-4.component';

const routes: Routes = [
  {
    path: '',
    component: Child4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child4RoutingModule { }