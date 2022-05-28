import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {HomeModule} from "../home/home.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AboutComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        HomeModule,
        FormsModule
    ]
})
export class AboutModule { }
