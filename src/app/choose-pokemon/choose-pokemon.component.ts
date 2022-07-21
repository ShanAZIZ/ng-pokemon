import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonName } from '../pokemon/pokemon.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css']
})
export class ChoosePokemonComponent implements OnInit {
  pokemons: PokemonName[] = [];
  offset = 0;
  selectedPokemon: PokemonName | undefined = undefined;
  @Output()
  chosenPokemon: EventEmitter<PokemonName> = new EventEmitter<PokemonName>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.setPokemonNames();
  }

  setPokemonNames(): void {
    this.pokemonService.fetchPokemonNames(this.offset).subscribe({
      next: (res) => {
        if (res.results) {
          this.pokemons = res.results;
        }
      },
      error: () => {
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

  selectPokemon(pokemonName: PokemonName) {
    this.selectedPokemon = pokemonName;
    this.chosenPokemon.emit(pokemonName);
  }
}

//  `http://pokemon.lux.frachet.berthelot.io/api/img/${name}.gif`
