import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokemonComponent } from './all-pokemon/all-pokemon.component';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';

const routes: Routes = [
  {
    path:'', component:AllPokemonComponent
  },
  {
    path:'view-pokemon/:id', component:ViewPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
