import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Mycomponents/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { NgTinyUrlModule } from 'ng-tiny-url';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
