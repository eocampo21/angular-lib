import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvmazeModule } from 'tvmaze';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvmazeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
