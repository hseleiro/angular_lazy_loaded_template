import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: HomeComponent,
    children: [
      {
        path: 'private/home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: ProfileComponent,
    children: [
      {
        path: 'private/profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})

export class PrivateRoutingModule { }
