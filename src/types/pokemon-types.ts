export interface PokemonList {
  count: number;
  next: string;
  previous: null | string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  types: PokeType[];
  abilities: Ability[];
  stats: Stat[];
  sprites: Sprite;
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokeType {
  type: { name: string };
}

export interface Sprite {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}
