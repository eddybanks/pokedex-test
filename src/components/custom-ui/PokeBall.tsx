import styled from "styled-components";
import { colors } from "../../helpers/shared-styles";

export const PokeBall = () => {
  return (
    <PokeBallLarge>
      <PokeBallLine>
        <PokeBallCenter></PokeBallCenter>
      </PokeBallLine>
    </PokeBallLarge>
  );
};

const PokeBallLarge = styled.div`
  display: grid;
  justify-content: center;
  margin: 100% 0 0 70%;
  align-items: center;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  border: 1rem solid ${colors.darkBg(0.1)};
  background-color: ${colors.whiteIsh(0.5)};
  z-index: -14;
  -webkit-filter: drop-shadow(-12px -12px 12px #222);
  filter: drop-shadow(-12px -12px 12px #222);
  position: fixed;
  @media screen and (min-width: 720px) {
    margin: 30% 0 0 70%;
    height: 40rem;
    width: 40rem;
    border: 3rem solid ${colors.darkBg(0.1)};
  }
`;

const PokeBallCenter = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: 1.5rem solid ${colors.darkBg(0.2)};
  background-color: ${colors.whiteIsh()};
  z-index: -14;
  position: relative;
  @media screen and (min-width: 720px) {
    height: 10rem;
    width: 10rem;
  }
`;

const PokeBallLine = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 2rem;
  width: 20rem;
  background-color: ${colors.darkBg(0.1)};
  z-index: -14;
  position: relative;
  @media screen and (min-width: 720px) {
    background-color: ${colors.darkBg(0.2)};
    height: 3rem;
    width: 40rem;
  }
`;
