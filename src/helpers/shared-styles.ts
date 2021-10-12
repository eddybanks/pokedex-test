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

export const BrandName = styled.a`
  font-family: ${fonts.montserrat}, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${colors.darkBg()};
`;
