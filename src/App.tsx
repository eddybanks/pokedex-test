import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { PokeBall } from "./components/custom-ui/PokeBall";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PokeDetails } from "./components/PokeDetails";
import { PokeList } from "./components/PokeList";
import { SearchBar } from "./components/SearchBar";
import { fetcher, pokemonListUrl } from "./helpers/data-helpers";
import { colors, fonts } from "./helpers/shared-styles";

function App() {
  const { data, error } = useSWR(pokemonListUrl, fetcher);
  const [searchPoke, setSearchPoke] = useState("");

  const selectPokemon = (pokemon: string) => setSearchPoke(pokemon);

  if (error) throw error;
  if (!data) return <div>loading...</div>;
  return (
    <PageContainer>
      <Header title="Edmka's Pokedex" />
      <SearchBar selectPokemon={selectPokemon} />
      {searchPoke === "" ? (
        <PokeList data={data} selectPokemon={selectPokemon} />
      ) : (
        <PokeDetails searchPoke={searchPoke} selectPokemon={selectPokemon} />
      )}
      <PokeBall />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: min-content min-content auto min-content;
  gap: 1em;
  justify-content: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  color: ${colors.darkBg()};
  background-position: fixed;
  font-family: ${fonts.roboto}, sans-serif;
  font-size: 1rem;
`;

export default App;
