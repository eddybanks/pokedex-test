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
      <PokeBallLarge>
        <PokeBallLine>
          <PokeBallCenter></PokeBallCenter>
        </PokeBallLine>
      </PokeBallLarge>
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
  justify-items: stretch;
  align-content: flex-start;
  gap: 1rem;
  padding: 2rem 5rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${colors.whiteIsh(0.5)};
`;

const PokeImageHolder = styled.div`
  display: grid;
  justify-items: center;
`;

const PokeBallLarge = styled.div`
  display: grid;
  justify-content: center;
  margin: 3rem;
  align-items: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 4px solid ${colors.darkBg(0.5)};
  background-color: ${colors.red(0.5)};
  z-index: 3;
  -webkit-filter: drop-shadow(2px 2px 2px #222);
  filter: drop-shadow(2px 2px 2px #222);
  position: absolute;
`;

const PokeBallCenter = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 4px solid ${colors.darkBg(0.7)};
  background-color: ${colors.whiteIsh()};
  z-index: 14;
  position: relative;
`;

const PokeBallLine = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 20px;
  width: 150px;
  background-color: ${colors.darkBg(0.5)};
  z-index: 3;
  position: relative;
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
  background-color: ${colors.whiteIsh()};
  border-radius: 1rem;
  color: ${colors.darkBg()};
`;
