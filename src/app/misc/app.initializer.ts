import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function AppInitializerFactory(translate: TranslateService): () => void {
  return (): void => {
    const languages: string[] = ['en'];
    const browserLang: string = translate.getBrowserLang() as string;

    console.log('browserLang',browserLang);
    
    translate.addLangs(languages);
    translate.setDefaultLang('en');

    translate.use(browserLang);
  };
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
