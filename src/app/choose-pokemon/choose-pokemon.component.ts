import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon.component';
import { ChoosePokemonService } from './choose-pokemon.service';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css']
})
export class ChoosePokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private choosePokemonService: ChoosePokemonService) {}

  ngOnInit(): void {
    this.choosePokemonService.fetchAllPokemon();
  }

  initAllPokemons() {
    this.choosePokemonService.fetchAllPokemon().subscribe((res) => {
      if (res['results'] !== undefined) {
        const pokemon: Pokemon;
        const names = res['results'].reduce((r: any) => r.name);
        names.forEach();

        // urls.forEach((url: any) => {
        //   this.choosePokemonService
        //     .fetchPokemonInfo(undefined, url)
        //     .subscribe((res) => {
        //       const poke: Pokemon;
        //       poke.name = res.name;
        //       poke.id = res.id;
        //     });
        // });
      }
    });
  }
}
