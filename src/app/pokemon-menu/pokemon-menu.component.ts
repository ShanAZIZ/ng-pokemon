// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { PokemonName } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.css']
})
export class PokemonMenuComponent implements OnInit {
  firstPokemon: PokemonName | undefined = undefined;
  secondPokemon: PokemonName | undefined = undefined;
  ngOnInit() {}

  assignChosenPokemon(event: PokemonName, number: number) {
    if (number === 1) {
      this.firstPokemon = event;
    } else {
      this.secondPokemon = event;
    }
  }

  battle() {
    console.log('First : ', this.firstPokemon);
    console.log('Second : ', this.secondPokemon);
  }
}
