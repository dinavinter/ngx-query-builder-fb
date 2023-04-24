import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxQueryFbComponent } from './ngx-query-fb/ngx-query-fb.component';
import { NgQueryBuilderConsoleComponent } from './ng-query-builder-console/ng-query-builder-console.component';
import {LandingComponent} from './landing/landing.component'
const routes: Routes = [
  { path: 'main', component: LandingComponent},

  { path: 'query-fb-console', component: NgQueryBuilderConsoleComponent},

  { path: 'query-fb', component: NgxQueryFbComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
