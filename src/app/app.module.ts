import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWebComponentsAngularModule } from '@one/angular';
import { TestComponent } from './test/test.component';
import { InternshipTableComponent } from './pages/apprentice-page/internship-table/internship-table.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/apprentice-page/profile/profile.component';

@NgModule({
  declarations: [AppComponent, TestComponent, InternshipTableComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, OneWebComponentsAngularModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
