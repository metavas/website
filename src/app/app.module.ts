import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HomeModule} from "./pages/home/home.module";
import {AboutModule} from "./pages/about/about.module";
import {PageNotFoundModule} from "./pages/page-not-found/page-not-found.module";
import {FormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {ElModule} from "element-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    AboutModule,
    PageNotFoundModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxSpinnerModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
