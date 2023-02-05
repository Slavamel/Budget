import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { ExpensesModule } from './modules/expenses/expenses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExpensesModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-Ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
