import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OneWebComponentsAngularModule } from '@one/angular';
import { LandingComponent } from './pages/landing-page/landing/landing.component';
import { AbbaTableComponent } from './pages/abba-page/abba-table/abba-table.component';
import { InternshipTableComponent } from './pages/apprentice-page/internship-table/internship-table.component';
import { ProfileComponent } from './pages/apprentice-page/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AbbaTableComponent,
    LandingComponent,
    InternshipTableComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OneWebComponentsAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
