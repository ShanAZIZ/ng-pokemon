import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonName } from '../pokemon/pokemon.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css']
})
export class ChoosePokemonComponent implements OnInit {
  @Input()
  pokemonNames: PokemonName[] = [];
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() previous: EventEmitter<any> = new EventEmitter();

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  setPokemon(pokemonName: PokemonName) {}
}

//  `http://pokemon.lux.frachet.berthelot.io/api/img/${name}.gif`
