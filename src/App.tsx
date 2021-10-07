import styled from "styled-components";
import { Header } from "./components/Header";

function App() {
  return (
    <PageContainer>
      <Header title="Edmka's Pokedex" />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

export default App;
