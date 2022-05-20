import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child1RoutingModule } from './child-1-routing.module';
import { Child1Component } from './child-1.component';

@NgModule({
  imports: [
    CommonModule,
    Child1RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Child1Component
  ]
})
export class Child1Module { }
