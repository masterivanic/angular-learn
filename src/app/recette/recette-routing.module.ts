import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette.component';

export const recetteRoutes: Routes = [
  {
    path: '',
    component: RecetteComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      recetteRoutes,
      { enableTracing: true }
    )],
})

export class RecetteRoutingModule { }
