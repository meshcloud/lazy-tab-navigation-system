import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Root2RoutingModule } from './root-2-routing.module';
import { Root2Component } from './root-2.component';

@NgModule({
  imports: [
    CommonModule,
    Root2RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Root2Component
  ]
})
export class Root2Module { }
