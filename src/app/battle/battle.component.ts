import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonName } from '../pokemon/pokemon.component';
import { isPokemonFire, isPokemonIce } from '../pokemon/pokemon.type';
import { forkJoin, map, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  pokemon1: Pokemon | undefined = undefined;
  pokemon2: Pokemon | undefined = undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}
  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        map((params) => {
          const pokemonName1: PokemonName = {
            name: params['firstPokemonName'],
            url: params['firstPokemonUrl']
          };
          const pokemonName2: PokemonName = {
            name: params['secondPokemonName'],
            url: params['secondPokemonUrl']
          };
          return [pokemonName1, pokemonName2] as PokemonName[];
        }),
        switchMap(([pokemonName1, pokemonName2]) => {
          return forkJoin([
            this.pokemonService.fetchPokemonInfo(pokemonName1),
            this.pokemonService.fetchPokemonInfo(pokemonName2)
          ]);
        })
      )
      .subscribe(([pokemon1, pokemon2]) => {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        console.log(this.battleRounds().then());
      });
  }

  async battleRounds(): Promise<string> {
    let countRound = 0;
    let p1AsAttack = false;
    if (this.pokemon1 && this.pokemon2) {
      while (this.pokemon1.currentHp <= 0 || this.pokemon2.currentHp <= 0) {
        if (countRound === 0) {
          if (
            this.FirstToAttack(this.pokemon1, this.pokemon2) === this.pokemon1
          ) {
            await this.attack(this.pokemon1, this.pokemon2);
          } else {
            await this.attack(this.pokemon2, this.pokemon1);
          }
          countRound++;
        }
        if (p1AsAttack) {
          await this.attack(this.pokemon2, this.pokemon1);

          p1AsAttack = false;
        } else {
          await this.attack(this.pokemon1, this.pokemon2);
          p1AsAttack = true;
        }
      }
      if (this.pokemon1.currentHp <= 0) {
        return `${this.pokemon2.name} is the winner !`;
      } else {
        return `${this.pokemon1.name} is the winner !`;
      }
    } else {
      return 'une erreur est survenue';
    }
  }

  async attack(from: Pokemon, to: Pokemon) {
    return new Promise(function () {
      setTimeout(() => {
        let coef = 1;
        if (isPokemonFire(from) && isPokemonIce(to)) {
          coef = 1.5;
        }
        if (to.currentHp > from.attack * coef) {
          to.currentHp -= from.attack * coef;
        } else {
          to.currentHp = 0;
        }
      }, 5);
    });
  }

  FirstToAttack(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
    if (pokemon1.speed > pokemon2.speed) {
      return pokemon1;
    } else {
      return pokemon2;
    }
  }
}
