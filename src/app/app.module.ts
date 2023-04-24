import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { NgQueryBuilderConsoleComponent } from './ng-query-builder-console/ng-query-builder-console.component';
import { NgxQueryFbComponent } from './ngx-query-fb/ngx-query-fb.component';
import { LandingComponent } from './landing/landing.component';
// import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
// import {
//   FD_LANGUAGE,
//   FdLanguage,
//   FD_LANGUAGE_UKRAINIAN,
// } from '@fundamental-ngx/i18n';
// import { of } from 'rxjs';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    FundamentalNgxCoreModule,
    FundamentalNgxPlatformModule,
    AppRoutingModule,
    NgxAngularQueryBuilderModule
  ],
  declarations: [AppComponent, HelloComponent, NgQueryBuilderConsoleComponent, NgxQueryFbComponent, LandingComponent],
  bootstrap: [ AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [
  //   {
  //     provide: FD_LANGUAGE,
  //     useValue: of<FdLanguage>(FD_LANGUAGE_UKRAINIAN),
  //   },
  // ],
})
export class AppModule {}
