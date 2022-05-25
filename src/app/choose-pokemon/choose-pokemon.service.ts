import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoosePokemonService {
  pokeapiUrl: string = `https://pokeapi.co/api/v2/`;

  constructor(private http: HttpClient) {}

  fetchAllPokemon() {
    return this.http.get<any>(`${this.pokeapiUrl}pokemon?limit=151%27`);

    // if (data['results'] !== undefined) {
    //   return data['results'].reduce((res) => res.name);
    // }
    // https://pokeapi.co/api/v2/pokemon/1/
  }

  fetchPokemonInfo(id?: number, url?: string): Observable<any> {
    // data.subscribe((res) => console.log(res));
    if (url !== undefined) {
      return this.http.get<any>(url);
    }
    if (id !== undefined) {
      return this.http.get<any>(`${this.pokeapiUrl}pokemon/${id}`);
    }
    return new Observable<any>();
  }

  // fetchPokemonGif(name: string) {}
}
