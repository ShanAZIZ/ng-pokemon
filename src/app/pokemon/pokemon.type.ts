import { PokemonProps } from './pokemon.component';

export type PokemonFire = PokemonProps & {
  type: 'fire';
};
export type PokemonIce = PokemonProps & {
  type: 'ice';
};
export type PokemonWater = PokemonProps & {
  type: 'water';
};
export type PokemonGrass = PokemonProps & {
  type: 'grass';
};
export type PokemonElectric = PokemonProps & {
  type: 'electric';
};
export type PokemonGround = PokemonProps & {
  type: 'ground';
};
export type PokemonFlying = PokemonProps & {
  type: 'flying';
};
export type PokemonNormal = PokemonProps & {
  type: 'normal';
};
export type PokemonPoison = PokemonProps & {
  type: 'poison';
};
export type PokemonFighting = PokemonProps & {
  type: 'fighting';
};
export type PokemonPsychic = PokemonProps & {
  type: 'psychic';
};
export type PokemonRock = PokemonProps & {
  type: 'rock';
};
export type PokemonGhost = PokemonProps & {
  type: 'ghost';
};
export type PokemonDragon = PokemonProps & {
  type: 'dragon';
};
export type PokemonDark = PokemonProps & {
  type: 'dark';
};
export type PokemonSteel = PokemonProps & {
  type: 'steel';
};
export type PokemonFairy = PokemonProps & {
  type: 'fairy';
};

export function isPokemonIce(x: PokemonProps): x is PokemonIce {
  return x.type === 'ice';
}

export function isPokemonFire(x: PokemonProps): x is PokemonFire {
  return x.type === 'fire';
}

export function isPokemonWater(x: PokemonProps): x is PokemonWater {
  return x.type === 'water';
}

export function isPokemonGrass(x: PokemonProps): x is PokemonGrass {
  return x.type === 'grass';
}

export function isPokemonElectric(x: PokemonProps): x is PokemonElectric {
  return x.type === 'electric';
}

export function isPokemonGround(x: PokemonProps): x is PokemonGround {
  return x.type === 'ground';
}

export function isPokemonFlying(x: PokemonProps): x is PokemonFlying {
  return x.type === 'flying';
}

export function isPokemonNormal(x: PokemonProps): x is PokemonNormal {
  return x.type === 'normal';
}

export function isPokemonPoison(x: PokemonProps): x is PokemonPoison {
  return x.type === 'poison';
}

export function isPokemonFighting(x: PokemonProps): x is PokemonFighting {
  return x.type === 'fighting';
}

export function isPokemonPsychic(x: PokemonProps): x is PokemonPsychic {
  return x.type === 'psychic';
}

export function isPokemonRock(x: PokemonProps): x is PokemonRock {
  return x.type === 'rock';
}

export function isPokemonGhost(x: PokemonProps): x is PokemonGhost {
  return x.type === 'ghost';
}

export function isPokemonDragon(x: PokemonProps): x is PokemonDragon {
  return x.type === 'dragon';
}

export function isPokemonDark(x: PokemonProps): x is PokemonDark {
  return x.type === 'dark';
}

export function isPokemonSteel(x: PokemonProps): x is PokemonSteel {
  return x.type === 'steel';
}

export function isPokemonFairy(x: PokemonProps): x is PokemonFairy {
  return x.type === 'fairy';
}
