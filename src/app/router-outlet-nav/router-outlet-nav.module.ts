import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterOutletNavComponent } from './router-outlet-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RouterOutletNavComponent
  ],
  exports: [
    RouterOutletNavComponent
  ]
})
export class RouterOutletNavModule { }
