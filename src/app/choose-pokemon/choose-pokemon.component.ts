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
    this.initAllPokemons();
  }

  initAllPokemons() {
    this.choosePokemonService.fetchAllPokemon().subscribe((res) => {
      if (res['results'] !== undefined) {
        console.log(res['results']);
        const names = res['results'].map((r: any) => r.name);
        names.forEach((name: any) => {
          this.pokemons.push({
            attack: 0,
            currentHp: 0,
            maxHp: 0,
            speed: 0,
            type: '',
            name: name,
            gif: `http://pokemon.lux.frachet.berthelot.io/api/img/${name}.gif`
          });
        });
      }
    });
  }
}
