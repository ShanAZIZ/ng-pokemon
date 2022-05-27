import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonName } from './pokemon/pokemon.component';

@Injectable()
export class PokemonService {
  pokeapiUrl: string = `https://pokeapi.co/api/v2/`;

  constructor(private http: HttpClient) {}

  fetchPokemonNames(offset: number) {
    return this.http.get<any>(
      `${this.pokeapiUrl}pokemon?offset=${offset}&limit=9`
    );
  }

  fetchPokemonInfo(pokemonName: PokemonName): Observable<Pokemon> {
    // data.subscribe((res) => console.log(res));
    return this.http.get<any>(pokemonName.url);
  }
}
