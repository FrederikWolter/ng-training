import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWebComponentsAngularModule } from '@one/angular';
import { TestComponent } from './test/test.component';
import { AbbaTableComponent } from './pages/abba-page/abba-table/abba-table.component';

@NgModule({
  declarations: [AppComponent, TestComponent, AbbaTableComponent],
  imports: [BrowserModule, AppRoutingModule, OneWebComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
