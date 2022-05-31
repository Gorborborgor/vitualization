import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppInitializerFactory, HttpLoaderFactory } from './misc/app.initializer';
import { TranslateService } from '@ngx-translate/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitializerFactory,
      multi: true,
      deps: [TranslateService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
