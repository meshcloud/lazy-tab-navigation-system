import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child2RoutingModule } from './child-2-routing.module';
import { Child2Component } from './child-2.component';

@NgModule({
  imports: [
    CommonModule,
    Child2RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Child2Component
  ]
})
export class Child2Module { }
