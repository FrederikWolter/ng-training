import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OneWebComponentsAngularModule } from '@one/angular';
import { TestComponent } from './test/test.component';
import { LandingComponent } from './pages/landing-page/landing/landing.component';

@NgModule({
  declarations: [AppComponent,
    TopBarComponent, TestComponent, LandingComponent],
  imports: [BrowserModule, AppRoutingModule, 
    FormsModule,OneWebComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
