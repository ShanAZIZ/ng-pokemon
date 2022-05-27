import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonMenuComponent } from './pokemon-menu/pokemon-menu.component';
import { MainComponent } from './main/main.component';
import { ChoosePokemonComponent } from './choose-pokemon/choose-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { ChoosePokemonService } from './choose-pokemon/choose-pokemon.service';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonMenuComponent,
    MainComponent,
    ChoosePokemonComponent,
    BattleComponent
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [ChoosePokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
