import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonName } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  pokemon1: PokemonName | undefined = undefined;
  pokemon2: PokemonName | undefined = undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params): void => {
      this.pokemon1 = {
        name: params['firstPokemonName'],
        url: params['firstPokemonUrl']
      };
      this.pokemon2 = {
        name: params['secondPokemonName'],
        url: params['secondPokemonUrl']
      };
    });
  }
}
