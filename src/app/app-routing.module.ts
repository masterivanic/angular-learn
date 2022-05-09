import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { RecetteComponent } from './recette/recette.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  {
    path: 'recette',
    component: RecetteComponent
  },
  {
    path: 'hero',
    component: HeroFormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: "products", component: ProductsComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )],
})

export class AppRoutingModule { }
