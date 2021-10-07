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
