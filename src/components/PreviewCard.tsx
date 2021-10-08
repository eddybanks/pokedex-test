import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../helpers/data-helpers";
import { fonts } from "../helpers/shared-styles";

interface PreviewCardProps {
  name: string;
  url: string;
}

export const PreviewCard = ({ name, url }: PreviewCardProps) => {
  const { data, error } = useSWR<any, any>(url, fetcher);
  const image_url =
    data?.sprites?.other["official-artwork"].front_default || "";

  if (error) throw error;
  if (!data) return <div>loading...</div>;

  return (
    <CardContainer>
      <PokemonImage src={image_url} alt={`Picture of ${name}`} />
      <PokemonName>{name}</PokemonName>
    </CardContainer>
  );
};

// Styled Component Definitions

const CardContainer = styled.section`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  background-color: aliceblue;
  padding: 1rem;
  height: fit-content;
`;

const PokemonImage = styled.img`
  height: 5rem;
`;

const PokemonName = styled.h2`
  color: black;
  font-family: ${fonts.roboto}, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: capitalize;
`;
