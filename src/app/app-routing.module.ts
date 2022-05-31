import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminHomeComponent } from './modules/admin/admin-home.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/portfolio',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/portfolio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
