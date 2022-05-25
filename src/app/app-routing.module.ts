import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonMenuComponent } from './pokemon-menu/pokemon-menu.component';
import { MainComponent } from './main/main.component';

let routes: Routes;
routes = [
  { path: '', component: MainComponent },
  { path: 'menu', component: PokemonMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
