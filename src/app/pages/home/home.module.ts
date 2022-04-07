import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SubscriptionComponent} from "../../components/subscription/subscription.component";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        HomeComponent,
        SubscriptionComponent
    ],
    exports: [
        SubscriptionComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
