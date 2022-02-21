import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './headerComponent/header.component';
import { mainComponent } from './mainComponent/main.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    mainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
