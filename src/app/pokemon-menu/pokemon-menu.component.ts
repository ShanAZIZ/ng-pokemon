import { Component, OnInit } from '@angular/core';
import { PokemonName } from '../pokemon/pokemon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-menu',
  templateUrl: './pokemon-menu.component.html',
  styleUrls: ['./pokemon-menu.component.css']
})
export class PokemonMenuComponent implements OnInit {
  firstPokemon: PokemonName | undefined = undefined;
  secondPokemon: PokemonName | undefined = undefined;

  constructor(private router: Router) {}

  ngOnInit() {}

  assignChosenPokemon(event: PokemonName, number: number) {
    if (number === 1) {
      this.firstPokemon = event;
    } else {
      this.secondPokemon = event;
    }
  }

  battle() {
    if (this.firstPokemon && this.secondPokemon) {
      this.router.navigate(['battle'], {
        queryParams: {
          firstPokemonName: this.firstPokemon.name,
          firstPokemonUrl: this.firstPokemon.url,
          secondPokemonName: this.secondPokemon.name,
          secondPokemonUrl: this.secondPokemon.url
        }
      });
    } else {
      alert('Veuillez choisir deux pokemons');
    }
  }
}
