import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMenuComponent } from './pokemon-menu.component';

describe('PokemonMenuComponent', () => {
  let component: PokemonMenuComponent;
  let fixture: ComponentFixture<PokemonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonMenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
