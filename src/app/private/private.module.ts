import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateComponent } from './private.component';

import { PrivateRoutingModule } from "./private-routing.module";
import { RouterModule } from "@angular/router";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HomeModule,
    RouterModule,
  ]
})
export class PrivateModule { }
