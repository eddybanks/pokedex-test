import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy;2021 Edmka</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: 720px) {
    padding: 0.5rem;
  }
`;
