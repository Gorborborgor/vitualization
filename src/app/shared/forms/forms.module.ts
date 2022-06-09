import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    TextareaComponent,
    FileUploaderComponent,
  ],
  declarations: [
    InputComponent,
    TextareaComponent,
    FileUploaderComponent,
  ]
})
export class AppFormsModule { }
