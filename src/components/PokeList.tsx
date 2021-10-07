import styled from "styled-components";

export const PokeList = () => {
  return (
    <PokeListContainer>
      {/* TODO: Display the cards in here! */}
      <p>Display results from search here!!</p>
    </PokeListContainer>
  );
};

const PokeListContainer = styled.section`
  display: grid;
  justify-content: space-evenly;
`;
