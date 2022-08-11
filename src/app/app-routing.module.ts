import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing-page/landing/landing.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"", component:LandingComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
