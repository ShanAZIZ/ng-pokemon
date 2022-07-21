import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon, PokemonName } from './pokemon/pokemon.component';

export interface PokemonApiResultArray {
  results: PokemonName[];
}

@Injectable()
export class PokemonService {
  pokeApiUrl = `https://pokeapi.co/api/v2/`;

  constructor(private http: HttpClient) {}

  fetchPokemonNames(offset: number) {
    return this.http.get<PokemonApiResultArray>(
      `${this.pokeApiUrl}pokemon?offset=${offset}&limit=9`
    );
  }

  fetchPokemonInfo(pokemonName: PokemonName): Observable<Pokemon> {
    return of({
      name: pokemonName.name,
      attack: 12,
      maxHp: 100,
      currentHp: 100,
      speed: 4,
      type: 'fire'
    });
  }
}
