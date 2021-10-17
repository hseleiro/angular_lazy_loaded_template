import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';

import { PublicRoutingModule } from "./public-routing.module";
import { RouterModule } from "@angular/router";
import { WelcomeModule } from "./welcome/welcome.module";
import {AboutModule} from "./about/about.module";
import {SignInModule} from "./sign-in/sign-in.module";
import {SignUpModule} from "./sign-up/sign-up.module";

@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    WelcomeModule,
    AboutModule,
    SignInModule,
    SignUpModule,
    RouterModule
  ]
})
export class PublicModule { }
