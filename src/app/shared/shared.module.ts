import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { AppFormsModule } from './forms/forms.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

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
    PostsListComponent,
    HeaderComponent
  ],
  declarations: [
    PostsListComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
