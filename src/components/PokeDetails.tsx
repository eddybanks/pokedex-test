import styled from "styled-components";
import useSWR from "swr";
import { fetcher, pokemonListUrl } from "../helpers/data-helpers";
import { colors } from "../helpers/shared-styles";
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
      <PokeImageHolder>
        <PokeImage
          src={data.sprites.other["official-artwork"].front_default}
          alt={`${data.name}`}
        />
      </PokeImageHolder>
      <PokeDescription>
        <p>Weight: {data.weight}</p>
        <p>Height: {data.height}</p>
      </PokeDescription>
    </PokeDetailsContainer>
  );
};

const PokeDetailsContainer = styled.section`
  display: grid;
  align-content: flex-start;
  gap: 1rem;
  padding: 2rem 5rem;
  width: 68%;
  border-radius: 0.5rem;
  background-color: ${colors.red(0.4)};
`;

const PokeImageHolder = styled.div`
  display: grid;
  justify-items: center;
  margin-top: -3rem;
`;

const PokeImage = styled.img`
  -webkit-filter: drop-shadow(7px 7px 7px #222);
  filter: drop-shadow(7px 7px 7px #222);
  height: 10rem;
  z-index: 5;
`;

const PokeName = styled.h2`
  text-transform: capitalize;
  color: ${colors.darkBg()};
  -webkit-filter: drop-shadow(2px 2px 0 ${colors.whiteIsh()});
  filter: drop-shadow(2px 2px 0 ${colors.whiteIsh()});
  margin-bottom: 3rem;
`;

const PokeDescription = styled.div`
  display: grid;
  margin-top: -3rem;
  padding-top: 5rem;
  padding: 1rem;
  background-color: ${colors.whiteIsh(0.8)};
  border-radius: 1rem;
  color: ${colors.darkBg()};
`;
