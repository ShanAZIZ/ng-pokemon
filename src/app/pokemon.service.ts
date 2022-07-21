import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonName } from './pokemon/pokemon.component';

@Injectable()
export class PokemonService {
  pokeApiUrl = `https://pokeapi.co/api/v2/`;

  constructor(private http: HttpClient) {}

  fetchPokemonNames(offset: number) {
    return this.http.get<PokemonName[]>(
      `${this.pokeApiUrl}pokemon?offset=${offset}&limit=9`
    );
  }

  fetchPokemonInfo(pokemonName: PokemonName): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonName.url);
  }
}
