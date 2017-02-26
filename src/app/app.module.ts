import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DiSampleAppComponent} from './di-sample-app/di-sample-app.component';
import {My2ndService} from "./services/my2nd.service";
import {ApiService} from "./services/api.service";
import {ViewportService} from "./services/viewport.service";

@NgModule({
  declarations: [
    AppComponent,
    DiSampleAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    My2ndService,
    ApiService,
    ViewportService,
    {provide: 'ApiServiceAlias', useExisting: ApiService},
    {
      provide: 'SizeService',
      useFactory: (viewport: any) => {
        return viewport.determineService();
      },
      deps: [ViewportService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
