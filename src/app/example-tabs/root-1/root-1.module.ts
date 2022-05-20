import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Root1RoutingModule } from './root-1-routing.module';
import { Root1Component } from './root-1.component';

@NgModule({
  imports: [
    CommonModule,
    Root1RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Root1Component
  ]
})
export class Root1Module { }
