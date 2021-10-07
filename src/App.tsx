import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PokeList } from "./components/PokeList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <PageContainer>
      <Header title="Edmka's Pokedex" />
      <SearchBar />
      <PokeList />
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
