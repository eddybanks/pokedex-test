import styled from "styled-components";
import { BrandName } from "../helpers/shared-styles";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderBar>
      <BrandName href="/">{title}</BrandName>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  display: grid;
  justify-content: center;
  padding: 2rem;
  @media screen and (max-width: 720px) {
    padding-bottom: 1rem;
  }
`;
