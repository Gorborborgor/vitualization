import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: AdminHomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin/home',
  },
];

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
