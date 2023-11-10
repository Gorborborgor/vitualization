import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductViewComponent } from './products-view/product-view.component';
import { ArсhitectureViewComponent } from './architecture-view/architecture-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductViewComponent,
    ArсhitectureViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
