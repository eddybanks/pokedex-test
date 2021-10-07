import styled from "styled-components";
import { PokemonList } from "../types/pokemon-types";

interface PokeListProps {
  data: PokemonList;
}

export const PokeList = ({ data }: PokeListProps) => {
  const { results } = data;

  return (
    <PokeListContainer>
      {/* TODO: Display the cards in here! */}
      {results.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </PokeListContainer>
  );
};

const PokeListContainer = styled.section`
  display: grid;
  justify-content: space-evenly;
  overflow: auto;
`;
