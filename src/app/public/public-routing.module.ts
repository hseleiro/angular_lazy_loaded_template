import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {WelcomeComponent} from "./welcome/welcome.component";
import {AboutComponent} from "./about/about.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: WelcomeComponent,
    children: [{
      path: 'public/welcome',
      loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
    }]
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: AboutComponent,
    children: [{
      path: 'public/about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    }]
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: SignInComponent,
    children: [{
      path: 'public/sign-in',
      loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
    }]
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: SignUpComponent,
    children: [{
      path: 'public/sign-up',
      loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
    }]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})

export class PublicRoutingModule { }
