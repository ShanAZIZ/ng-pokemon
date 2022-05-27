import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleModule } from './battle/battle.module';
import { AppRoutingModule } from './app-routing.module';
import { PokemonMenuComponent } from './pokemon-menu/pokemon-menu.component';
import { MainComponent } from './main/main.component';
import { ChoosePokemonComponent } from './choose-pokemon/choose-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonMenuComponent,
    MainComponent,
    ChoosePokemonComponent
  ],
  imports: [HttpClientModule, BrowserModule, BattleModule, AppRoutingModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
