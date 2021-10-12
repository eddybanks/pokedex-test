import styled from "styled-components";

interface ColoredBarProps {
  color: string;
  stat: number;
}

export const ColoredBar = ({ color, stat }: ColoredBarProps) => {
  return <Bar color={color} stat={stat}></Bar>;
};

const Bar = styled.div<ColoredBarProps>`
  height: 3px;
  width: ${(props) => props.stat};
  color: ${(props) => props.color};
`;
