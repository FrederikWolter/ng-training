import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipTableComponent } from './pages/apprentice-page/internship-table/internship-table.component';
import { ProfileComponent } from './pages/apprentice-page/profile/profile.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path:"", component:TestComponent, pathMatch:'full'},{path:"abbapage", component:TestComponent}, {path:"apprenticepage", component:InternshipTableComponent},{path:"apprenticepage/profile", component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
