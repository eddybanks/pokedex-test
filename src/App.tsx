import styled from "styled-components";
import useSWR from "swr";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PokeList } from "./components/PokeList";
import { SearchBar } from "./components/SearchBar";
import { fetcher, pokemonListUrl } from "./helpers/data-helpers";

function App() {
  const { data, error } = useSWR(pokemonListUrl, fetcher);

  if (error) throw error;
  if (!data) return <div>loading...</div>;
  return (
    <PageContainer>
      <Header title="Edmka's Pokedex" />
      <SearchBar />
      <PokeList data={data} />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: min-content min-content auto min-content;
  height: 100vh;
`;

export default App;
