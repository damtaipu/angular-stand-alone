import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./presentation/page/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./presentation/page/about/about.component').then(c => c.AboutComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
