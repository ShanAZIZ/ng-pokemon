import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  pokemon1: string = '';
  pokemon2: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params): void => {
      console.log(params);
      this.pokemon1 = params['pokemon1'];
      this.pokemon2 = params['pokemon2'];
    });
  }
}
