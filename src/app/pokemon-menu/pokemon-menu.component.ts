// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonName } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.css']
})
export class PokemonMenuComponent implements OnInit {
  pokemonNames: PokemonName[] = [];
  offset: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.setPokemonNames();
  }

  setPokemonNames(): void {
    this.pokemonService.fetchPokemonNames(this.offset).subscribe({
      next: (res) => {
        if (res['results']) {
          this.pokemonNames = res['results'];
        }
      },
      error: (err) => {
        console.log(err);
        // TODO: Logger Service
      }
    });
  }

  next() {
    this.offset += 9;
    this.setPokemonNames();
  }

  previous() {
    if (this.offset > 8) {
      this.offset -= 8;
      this.setPokemonNames();
    }
  }
}
