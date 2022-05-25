import { Component, OnInit } from '@angular/core';

export interface Pokemon {
  name: string;
  attack: number;
  maxHp: number;
  currentHp: number;
  speed: number;
  type: string;
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
