import { ChangeEvent, SyntheticEvent, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher, pokemonListUrl } from "../helpers/data-helpers";
import { colors, fonts } from "../helpers/shared-styles";
import { PokemonList } from "../types/pokemon-types";

interface SearchBarProps {
  selectPokemon: (pokemon: string) => void;
}

export const SearchBar = ({ selectPokemon }: SearchBarProps) => {
  // searchInput is the value typed into the search bar
  const [searchInput, setSearchInput] = useState("");
  // autoCompletOptions are the autocomplete options displayed while searching for a pokemon
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    string[] | undefined
  >([]);
  // Full list of pokemon returned from the api call for autocomplete functionality
  const { data, error } = useSWR<PokemonList, any>(
    pokemonListUrl("?limit=898"),
    fetcher
  );

  const searchPokeList = (e: ChangeEvent<HTMLInputElement>) => {
    // basic filter functionality for filtering down the autocomplete list by the search input value
    let autoList = data?.results?.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    // Return a sorted array of pokemon names
    let autoListNames = autoList?.map((item) => item.name).sort();
    setSearchInput(e.target.value);

    e.target.value === ""
      ? setAutoCompleteOptions([])
      : setAutoCompleteOptions(autoListNames);
  };

  const submitSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    selectPokemon(searchInput);
  };

  if (error) throw error;
  if (!data) return <div>loading...</div>;

  return (
    <SearchBarContainer onSubmit={(e) => submitSearch(e)}>
      <SearchBarInput
        value={searchInput}
        onChange={searchPokeList}
        placeholder="Search pokemon by name..."
      />
      {autoCompleteOptions && (
        <AutoCompleteDropdown>
          {autoCompleteOptions.slice(0, 20).map((listItem) => (
            <DropdownItem
              key={listItem}
              onClick={() => {
                setSearchInput(listItem);
                selectPokemon(listItem);
                setAutoCompleteOptions([]);
              }}
            >
              {listItem}
            </DropdownItem>
          ))}
        </AutoCompleteDropdown>
      )}
    </SearchBarContainer>
  );
};

// Styled Components

const SearchBarContainer = styled.form`
  display: grid;
  justify-content: stretch;
  justify-items: center;
  padding-bottom: 2rem;
  height: auto;
`;

const SearchBarInput = styled.input`
  height: 2rem;
  padding: 0.1rem 1rem;
  width: 80vw;
  border: none;
  border-radius: 1rem 0 1rem 0;
  background-color: ${colors.whiteIsh()};
  text-transform: capitalize;
  font-family: ${fonts.robotoCondensed}, sans-serif;
  font-size: 1.3rem;
  @media screen and (min-width: 720px) {
    width: 60vw;
  }
`;

const AutoCompleteDropdown = styled.ul`
  border: none;
  background-color: ${colors.whiteIsh(0.9)};
  width: 81vw;
  max-height: 20vh;
  overflow: auto;
  z-index: 10;
  position: fixed;
  margin-top: 2.5rem;
  @media screen and (min-width: 720px) {
    width: 61vw;
  }
`;

const DropdownItem = styled.li`
  list-style: none;
  padding: 0.3rem 1rem;
  color: ${colors.darkBg()};
  text-transform: capitalize;
  :hover {
    background-color: ${colors.whiteIsh(0.9)};
  }
`;
