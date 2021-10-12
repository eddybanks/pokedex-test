import styled from "styled-components";
import useSWR from "swr";
import { fetcher, pokemonListUrl } from "../helpers/data-helpers";
import { colors, fonts } from "../helpers/shared-styles";
import { PokemonDetail } from "../types/pokemon-types";
import { ColoredBar } from "./custom-ui/ColoredBar";

interface PokeDetailsProps {
  searchPoke: string;
  selectPokemon: (pokemon: string) => void;
}

export const PokeDetails = ({
  searchPoke,
  selectPokemon,
}: PokeDetailsProps) => {
  const { data, error } = useSWR<PokemonDetail, any>(
    pokemonListUrl(searchPoke),
    fetcher
  );
  console.log(data);

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
        <PokeSection>
          <div>
            <h4>Height</h4>
            <span>{data.height}</span>
          </div>
          <div>
            <h4>Weight</h4>
            <span>{data.weight}</span>
          </div>
          <GridDisplay>
            <h4>Types</h4>
            <GridDisplayColumn>
              {data.types.map((type, idx) => (
                <MiniBarCard key={`pkdetails-ability-${idx}`}>
                  {type.type.name}
                </MiniBarCard>
              ))}
            </GridDisplayColumn>
          </GridDisplay>
          <GridDisplay>
            <h4>Abilities</h4>
            <GridDisplayColumn>
              {data.abilities.map((ability, idx) => (
                <MiniBarCard key={`pkdetails-ability-${idx}`}>
                  {ability.ability.name}
                </MiniBarCard>
              ))}
            </GridDisplayColumn>
          </GridDisplay>
        </PokeSection>
        <PokeSection>
          <h4>Base Stats</h4>
          <div>
            <span>HP</span>
            <ColoredBar />
          </div>
          <div>
            <span>Attack</span>
            <ColoredBar />
          </div>
          <div>
            <span>Defense</span>
            <ColoredBar />
          </div>
          <div>
            <span>Special Attack</span>
            <ColoredBar />
          </div>
          <div>
            <span>Special Defense</span>
            <ColoredBar />
          </div>
          <div>
            <span>Speed</span>
            <ColoredBar />
          </div>
        </PokeSection>
      </PokeDescription>
      <BackButton onClick={() => selectPokemon("")}>Back</BackButton>
    </PokeDetailsContainer>
  );
};

const PokeDetailsContainer = styled.section`
  display: grid;
  justify-content: center;
  align-content: flex-start;
  gap: 1rem;
  padding: 2rem 5rem;
  width: 50vw;
  max-width: 60%;
  border-radius: 0.5rem;
  background-color: ${colors.red(0.4)};
  -webkit-filter: drop-shadow(2px 2px 2px #222);
  filter: drop-shadow(2px 2px 2px #222);
  @media screen and (max-width: 720px) {
    padding: 2rem;
    width: 100vw;
  }
`;

const PokeImageHolder = styled.div`
  display: grid;
  justify-self: center;
  max-width: fit-content;
  margin: -3rem 0;
`;

const PokeImage = styled.img`
  -webkit-filter: drop-shadow(7px 7px 7px #222);
  filter: drop-shadow(7px 7px 7px #222);
  height: 8rem;
  z-index: 5;
  @media screen and (min-width: 720px) {
    height: 15rem;
  }
`;

const PokeName = styled.h2`
  text-transform: uppercase;
  color: ${colors.darkBg()};
  -webkit-filter: drop-shadow(2px 2px 3px ${colors.whiteIsh()});
  filter: drop-shadow(2px 2px 3px ${colors.whiteIsh()});
  margin-bottom: 1rem;
`;

const PokeSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 3rem;
  padding-top: 2rem;
  background-color: ${colors.whiteIsh(0.5)};
  border-radius: 1rem;
  color: ${colors.darkBg()};
  width: 15rem;
  @media screen and (max-width: 720px) {
    justify-content: center;
    width: 10rem;
    gap: 0.5rem;
  }
`;

const PokeDescription = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: stretch;
  align-items: start;
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GridDisplay = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const GridDisplayColumn = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
`;

const MiniBarCard = styled.span`
  display: grid;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.3rem;
  background-color: ${colors.darkBg(0.5)};
  color: ${colors.moreWhite()};
  text-transform: capitalize;
`;

const BackButton = styled.button`
  padding: 1rem 5rem;
  border-radius: 1rem;
  background-color: ${colors.darkBg(0.2)};
  border: none;
  font-family: ${fonts.montserrat}, sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.whiteIsh(0.7)};
  width: fit-content;
`;
