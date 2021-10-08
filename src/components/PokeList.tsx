import styled from "styled-components";
import { PokemonList } from "../types/pokemon-types";
import { PreviewCard } from "./PreviewCard";

interface PokeListProps {
  data: PokemonList;
}

export const PokeList = ({ data }: PokeListProps) => {
  const { results } = data;

  return (
    <ScrollContainer>
      <PokeListContainer>
        {/* TODO: Display the cards in here! */}
        {results.map((pokemon) => (
          <PreviewCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </PokeListContainer>
    </ScrollContainer>
  );
};

const PokeListContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 3rem;
  @media screen and (min-width: 500px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (min-width: 1020px) {
    grid-template-columns: auto auto auto auto;
  }
`;

const ScrollContainer = styled.div`
  overflow: auto;
`;
