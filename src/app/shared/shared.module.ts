import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [
    MaterialModule,
    RouterModule,
    TranslateModule
  ]
})
export class SharedModule { }
