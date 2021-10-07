import styled from "styled-components";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderBar>
      <HTitle>{title}</HTitle>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  display: grid;
`;

const HTitle = styled.h3`
  font-size: 1.4rem;
`;
