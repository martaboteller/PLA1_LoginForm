import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './application/login/login.component';
import { DetailComponent } from './application/detail/detail.component';
import { ListComponent } from './application/list/list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DetailComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
