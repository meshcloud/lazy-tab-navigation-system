import { RouterOutletNavModule } from 'src/app/router-outlet-nav';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child5RoutingModule } from './child-5-routing.module';
import { Child5Component } from './child-5.component';

@NgModule({
  imports: [
    CommonModule,
    Child5RoutingModule,

    RouterOutletNavModule
  ],
  declarations: [
    Child5Component
  ]
})
export class Child5Module { }
