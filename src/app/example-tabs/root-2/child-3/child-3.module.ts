import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child3RoutingModule } from './child-3-routing.module';
import { Child3Component } from './child-3.component';

@NgModule({
  imports: [
    CommonModule,
    Child3RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Child3Component
  ]
})
export class Child3Module { }
