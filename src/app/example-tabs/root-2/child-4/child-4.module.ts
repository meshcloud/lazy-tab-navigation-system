import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child4RoutingModule } from './child-4-routing.module';
import { Child4Component } from './child-4.component';

@NgModule({
  imports: [
    CommonModule,
    Child4RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Child4Component
  ]
})
export class Child4Module { }
