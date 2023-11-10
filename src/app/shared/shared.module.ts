import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { AppFormsModule } from './forms/forms.module';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    AppFormsModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
    CardsListComponent,
    CardComponent
  ],
  declarations: [
    HeaderComponent,
    CardsListComponent,
    CardComponent
  ]
})
export class SharedModule { }
