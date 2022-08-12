import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipTableComponent } from './pages/apprentice-page/internship-table/internship-table.component';
import { ProfileComponent } from './pages/apprentice-page/profile/profile.component';
import { LandingComponent } from './pages/landing-page/landing/landing.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'apprentice', component: InternshipTableComponent },
  { path: 'apprentice/profile', component: ProfileComponent },
  { path: 'start', component: StartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
