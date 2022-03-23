import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenRoutingModule } from './token-routing.module';
import { TokenComponent } from './token.component';
import {HomeModule} from "../home/home.module";


@NgModule({
  declarations: [
    TokenComponent
  ],
  imports: [
    CommonModule,
    TokenRoutingModule,
    HomeModule
  ]
})
export class TokenModule { }
