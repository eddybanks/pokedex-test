import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/";
