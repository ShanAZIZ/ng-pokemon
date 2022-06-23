// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { PokemonName } from '../pokemon/pokemon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.css']
})
export class PokemonMenuComponent implements OnInit {
  firstPokemon: string | undefined = undefined;
  secondPokemon: string | undefined = undefined;

  constructor(public router: Router) {}
  ngOnInit() {}

  assignChosenPokemon(event: string, number: number) {
    if (number === 1) {
      this.firstPokemon = event;
    } else {
      this.secondPokemon = event;
    }
  }

  battle() {
    if (!this.firstPokemon && !this.secondPokemon) {
      alert('Must choose two pokemons');
      return;
    }
    this.router.navigate(['/battle'], {
      queryParams: {
        pokemon1: this.firstPokemon,
        pokemon2: this.secondPokemon
      }
    });
  }
}
