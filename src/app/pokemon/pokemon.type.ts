import { Pokemon } from './pokemon.component';

export type PokemonFire = Pokemon & {
  type: 'fire';
};
export type PokemonIce = Pokemon & {
  type: 'ice';
};
export type PokemonWater = Pokemon & {
  type: 'water';
};
export type PokemonGrass = Pokemon & {
  type: 'grass';
};
export type PokemonElectric = Pokemon & {
  type: 'electric';
};
export type PokemonGround = Pokemon & {
  type: 'ground';
};
export type PokemonFlying = Pokemon & {
  type: 'flying';
};
export type PokemonNormal = Pokemon & {
  type: 'normal';
};
export type PokemonPoison = Pokemon & {
  type: 'poison';
};
export type PokemonFighting = Pokemon & {
  type: 'fighting';
};
export type PokemonPsychic = Pokemon & {
  type: 'psychic';
};
export type PokemonRock = Pokemon & {
  type: 'rock';
};
export type PokemonGhost = Pokemon & {
  type: 'ghost';
};
export type PokemonDragon = Pokemon & {
  type: 'dragon';
};
export type PokemonDark = Pokemon & {
  type: 'dark';
};
export type PokemonSteel = Pokemon & {
  type: 'steel';
};
export type PokemonFairy = Pokemon & {
  type: 'fairy';
};

export function isPokemonIce(x: Pokemon): x is PokemonIce {
  return x.type === 'ice';
}

export function isPokemonFire(x: Pokemon): x is PokemonFire {
  return x.type === 'fire';
}

export function isPokemonWater(x: Pokemon): x is PokemonWater {
  return x.type === 'water';
}

export function isPokemonGrass(x: Pokemon): x is PokemonGrass {
  return x.type === 'grass';
}

export function isPokemonElectric(x: Pokemon): x is PokemonElectric {
  return x.type === 'electric';
}

export function isPokemonGround(x: Pokemon): x is PokemonGround {
  return x.type === 'ground';
}

export function isPokemonFlying(x: Pokemon): x is PokemonFlying {
  return x.type === 'flying';
}

export function isPokemonNormal(x: Pokemon): x is PokemonNormal {
  return x.type === 'normal';
}

export function isPokemonPoison(x: Pokemon): x is PokemonPoison {
  return x.type === 'poison';
}

export function isPokemonFighting(x: Pokemon): x is PokemonFighting {
  return x.type === 'fighting';
}

export function isPokemonPsychic(x: Pokemon): x is PokemonPsychic {
  return x.type === 'psychic';
}

export function isPokemonRock(x: Pokemon): x is PokemonRock {
  return x.type === 'rock';
}

export function isPokemonGhost(x: Pokemon): x is PokemonGhost {
  return x.type === 'ghost';
}

export function isPokemonDragon(x: Pokemon): x is PokemonDragon {
  return x.type === 'dragon';
}

export function isPokemonDark(x: Pokemon): x is PokemonDark {
  return x.type === 'dark';
}

export function isPokemonSteel(x: Pokemon): x is PokemonSteel {
  return x.type === 'steel';
}

export function isPokemonFairy(x: Pokemon): x is PokemonFairy {
  return x.type === 'fairy';
}
