import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonMenuComponent } from './pokemon-menu/pokemon-menu.component';
import { MainComponent } from './main/main.component';
import { BattleComponent } from './battle/battle.component';

let routes: Routes;
routes = [
  { path: '', component: MainComponent },
  { path: 'menu', component: PokemonMenuComponent },
  { path: 'battle', component: BattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
