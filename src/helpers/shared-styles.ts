import styled from "styled-components";

export const fonts = {
  montserrat: "Montserrat",
  roboto: "Roboto",
  robotoCondensed: "Roboto Condensed",
};

export const colors = {
  red: (opacity?: number) => `rgba(255,0,0,${opacity || 1})`,
  bostonRed: (opacity?: number) => `rgba(204,0,0,${opacity || 1})`,
  ceruleanBlue: (opacity?: number) => `rgba(59,76,202,${opacity || 1})`,
  goldenYellow: (opacity?: number) => `rgba(255,222,0,${opacity || 1})`,
  goldFoil: (opacity?: number) => `rgba(179,161,37,${opacity || 1})`,
  darkBg: (opacity?: number) => `rgba(10,10,0,${opacity || 1})`,
  whiteIsh: (opacity?: number) => `rgba(230,230,220,${opacity || 1})`,
  moreWhite: (opacity?: number) => `rgba(255,255,255,${opacity || 1})`,
};

export const typeColors: { [key: string]: string } = {
  bug: "rgba(166, 185, 26, 0.4)",
  dragon: "rgba(111, 53, 252, 0.4)",
  fairy: "rgba(214, 133, 173, 0.4)",
  fire: "rgba(238, 129, 48, 0.4)",
  ghost: "rgba(115, 87, 151, 0.4)",
  ground: "rgba(226, 191, 101, 0.4)",
  normal: "rgba(168, 167, 122, 0.4)",
  psychic: "rgba(249, 85, 135, 0.4)",
  steel: "rgba(183, 183, 206, 0.4)",
  dark: "rgba(112, 87, 70, 0.4)",
  electric: "rgba(247, 208, 44, 0.4)",
  fighting: "rgba(194, 46, 40, 0.4)",
  flying: "rgba(169, 143, 243, 0.4)",
  grass: "rgba(122, 199, 76, 0.4)",
  ice: "rgba(150, 217, 214, 0.4)",
  poison: "rgba(163, 62, 161, 0.4)",
  rock: "rgba(182, 161, 54, 0.4)",
  water: "rgba(99, 144, 240, 0.4)",
};

export const BrandName = styled.a`
  font-family: ${fonts.montserrat}, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${colors.darkBg()};
`;
