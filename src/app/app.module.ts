import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWebComponentsAngularModule } from '@one/angular';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, OneWebComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
