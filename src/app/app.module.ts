import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleModule } from './battle/battle.module';

@NgModule({
  declarations: [AppComponent, PokemonComponent],
  imports: [BrowserModule, BattleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
