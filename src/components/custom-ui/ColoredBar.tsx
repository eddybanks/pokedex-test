import styled from "styled-components";
import { colors, fonts } from "../../helpers/shared-styles";

interface ColoredBarProps {
  color?: string;
  stat?: number;
}

export const ColoredBar = ({ color, stat }: ColoredBarProps) => {
  return (
    <OuterBar>
      <InnerBar color={color} stat={stat}>
        {stat || "50%"}
      </InnerBar>
    </OuterBar>
  );
};

const OuterBar = styled.div`
  display: grid;
  justify-content: start;
  height: 1.5rem;
  width: 15rem;
  border-radius: 0.8rem;
  background-color: ${colors.darkBg(0.2)};
  @media screen and (max-width: 720px) {
    width: 12rem;
  }
`;

const InnerBar = styled.div<ColoredBarProps>`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  border-radius: 0.8rem;
  background-color: ${colors.darkBg(0.5)};
  width: ${(props) => (props.stat ? `${props.stat}rem` : "8rem")};
  color: ${(props) => (props.color ? props.color : colors.darkBg(0.5))};
  color: ${colors.whiteIsh()};
  font-family: ${fonts.robotoCondensed}, sans-serif;
  font-weight: 200;
  font-size: 0.9rem;
  @media screen and (max-width: 720px) {
    width: ${(props) => (props.stat ? `${props.stat}rem` : "8rem")};
  }
`;
