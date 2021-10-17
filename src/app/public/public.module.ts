import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';

import { PublicRoutingModule } from "./public-routing.module";
import { RouterModule } from "@angular/router";
import { WelcomeModule } from "./welcome/welcome.module";

@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    WelcomeModule,
    RouterModule
  ]
})
export class PublicModule { }
