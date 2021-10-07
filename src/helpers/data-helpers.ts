import axios from "axios";

// Fetcher function needed by swr for fetching json data from the api and formating it
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// dynamic pokemon api url
export const pokemonListUrl = (query?: string) =>
  query
    ? `https://pokeapi.co/api/v2/pokemon/${query}`
    : "https://pokeapi.co/api/v2/pokemon/";
