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
  margin-left: 50%;
  align-items: center;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  border: 20px solid ${colors.darkBg(0.5)};
  background-color: ${colors.whiteIsh(0.5)};
  z-index: -14;
  -webkit-filter: drop-shadow(2px 2px 2px #222);
  filter: drop-shadow(2px 2px 2px #222);
  position: fixed;
`;

const PokeBallCenter = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  border: 20px solid ${colors.darkBg(0.5)};
  background-color: ${colors.whiteIsh()};
  z-index: -14;
  position: relative;
`;

const PokeBallLine = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 60px;
  width: 400px;
  background-color: ${colors.darkBg(0.5)};
  z-index: -14;
  position: relative;
`;
