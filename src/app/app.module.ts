import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Channel1Component } from './channel1/channel1.component';
import { Channel2Component } from './channel2/channel2.component';

@NgModule({
  declarations: [
    AppComponent,
    Channel1Component,
    Channel2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
