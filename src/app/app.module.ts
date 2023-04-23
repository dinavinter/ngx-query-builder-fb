import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';
// import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
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
    NgxAngularQueryBuilderModule,
    // FundamentalNgxCoreModule,
    // FundamentalNgxPlatformModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [
  //   {
  //     provide: FD_LANGUAGE,
  //     useValue: of<FdLanguage>(FD_LANGUAGE_UKRAINIAN),
  //   },
  // ],
})
export class AppModule {}
