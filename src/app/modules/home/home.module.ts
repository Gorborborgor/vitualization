import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { FurnitureViewComponent } from './furniture-view/furniture-view.component';
import { VisualsViewComponent } from './visuals-view/visuals-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    FurnitureViewComponent,
    VisualsViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
