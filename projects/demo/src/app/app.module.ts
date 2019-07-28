import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxSocketIoStreamModule } from 'ngx-socket-io-stream';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSocketIoStreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
