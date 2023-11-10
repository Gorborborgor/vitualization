import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';
import { ProductViewComponent } from './modules/home/products-view/product-view.component';
import { ArсhitectureViewComponent } from './modules/home/architecture-view/architecture-view.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductViewComponent
  },
  {
    path: 'architecture',
    component: ArсhitectureViewComponent
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
