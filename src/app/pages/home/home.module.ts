import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SubscriptionComponent} from "../../components/subscription/subscription.component";


@NgModule({
  declarations: [
    HomeComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
