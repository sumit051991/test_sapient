
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true
    }),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
