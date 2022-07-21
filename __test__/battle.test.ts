import { PokemonFire, PokemonIce } from '../../PokeScript/src/pokemon';
import { Battle } from '../../PokeScript/src/battle';

let battle: Battle;
let pikachu: PokemonFire;
let bulbizarre: PokemonIce;
let salameche: PokemonFire;

beforeEach(() => {
  battle = new Battle();
  pikachu = {
    name: 'Pikachu',
    maxHp: 25,
    currentHp: 25,
    attack: 5,
    speed: 10,
    type: 'fire'
  };
  bulbizarre = {
    name: 'Bulbizarre',
    maxHp: 25,
    currentHp: 25,
    attack: 5,
    speed: 5,
    type: 'ice'
  };
  salameche = {
    name: 'Salamèche',
    maxHp: 25,
    currentHp: 25,
    attack: 6,
    speed: 8,
    type: 'fire'
  };
});

describe('Battle', () => {
  describe('first to attack', () => {
    describe('when Pikachu and Salamèche fights ', () => {
      it('should return Pikachu as first to attack', () => {
        expect(battle.FirstToAttack(pikachu, salameche)).toBe(pikachu);
      });
    });

    describe('when Salamèche and Bulbizarre fights ', () => {
      it('should return Salamèche as first to attack', () => {
        expect(battle.FirstToAttack(salameche, bulbizarre)).toBe(salameche);
      });
    });

    describe('when Pikachu and Bulbizarre fights ', () => {
      it('should return Pikachu as first to attack', () => {
        expect(battle.FirstToAttack(pikachu, bulbizarre)).toBe(pikachu);
      });
    });
  });
  describe('Winners', () => {
    describe('when Pikachu and Salamèche fights ', () => {
      it('should return Pikachu as winner', async () => {
        expect(await battle.battleRounds(pikachu, salameche)).toBe(
          'Pikachu is the winner !'
        );
      });
    });

    describe('when Salamèche and Bulbizarre fights ', () => {
      it('should return Salamèche as winner', async () => {
        expect(await battle.battleRounds(salameche, bulbizarre)).toBe(
          'Salamèche is the winner !'
        );
      });
    });

    describe('when Pikachu and Bulbizarre fights ', () => {
      it('should return Pikachu as winner', async () => {
        expect(await battle.battleRounds(pikachu, bulbizarre)).toBe(
          'Pikachu is the winner !'
        );
      });
    });
  });
  describe('Types', () => {
    describe('when fire pokemon attacks ice pokemon', () => {
      it('attack should be *1.5', async () => {
        await battle.attack(pikachu, bulbizarre);
        expect(bulbizarre.currentHp).toBe(17.5);
      });
    });
    describe('when fire pokemon attacks fire pokemon', () => {
      it('attack should be *1', async () => {
        await battle.attack(pikachu, salameche);
        expect(salameche.currentHp).toBe(20);
      });
    });
  });
});
