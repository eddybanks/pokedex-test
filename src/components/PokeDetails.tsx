import styled from "styled-components";
import useSWR from "swr";
import { fetcher, pokemonListUrl } from "../helpers/data-helpers";
import { PokemonDetail } from "../types/pokemon-types";

interface PokeDetailsProps {
  searchPoke: string;
}

export const PokeDetails = ({ searchPoke }: PokeDetailsProps) => {
  const { data, error } = useSWR<PokemonDetail, any>(
    pokemonListUrl(searchPoke),
    fetcher
  );

  if (error) throw error;
  if (!data) return <div>loading...</div>;
  return (
    <PokeDetailsContainer>
      <PokeName>{data.name}</PokeName>
      <img
        src={data.sprites.other["official-artwork"].front_default}
        alt={`${data.name}`}
      />
    </PokeDetailsContainer>
  );
};

const PokeDetailsContainer = styled.section`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: flex-start;
  gap: 1rem;
`;

const PokeName = styled.h2`
  text-transform: capitalize;
`;
