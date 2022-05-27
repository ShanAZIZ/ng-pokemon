import { Component, OnInit } from '@angular/core';

export interface Pokemon {
  id?: number;
  name: string;
  attack: number;
  maxHp: number;
  currentHp: number;
  speed: number;
  type: string;
  gif: string;
}

export interface PokemonName {
  name: string;
  url: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
