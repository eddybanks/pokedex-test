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
  const [notFound, setNotFound] = useState("");
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
  const clearInput = () => {
    setSearchInput("");
    setAutoCompleteOptions([]);
  };

  const submitSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      autoCompleteOptions &&
      autoCompleteOptions.length > 0 &&
      searchInput in autoCompleteOptions
    ) {
      setNotFound("");
      selectPokemon(searchInput);
    } else {
      selectPokemon("");
      setNotFound("The pokemon you're searching for does not yet exist!");
    }
    setAutoCompleteOptions([]);
  };

  if (error) throw error;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <SearchBarContainer onSubmit={(e) => submitSearch(e)}>
        <SearchBarInput
          value={searchInput}
          onChange={searchPokeList}
          placeholder="Search pokemon by name..."
        />
        {searchInput && (
          <ClearButton type="button" onClick={clearInput}>
            Clear
          </ClearButton>
        )}
      </SearchBarContainer>
      {notFound.length > 0 && <ErrorMessage>{notFound}</ErrorMessage>}
      {autoCompleteOptions && (
        <AutoCompleteDropdown>
          {autoCompleteOptions.slice(0, 20).map((listItem) => (
            <DropdownItem
              key={listItem}
              onClick={() => {
                setSearchInput(listItem);
                selectPokemon(listItem);
                setAutoCompleteOptions([]);
                setNotFound("");
              }}
            >
              {listItem}
            </DropdownItem>
          ))}
        </AutoCompleteDropdown>
      )}
    </>
  );
};

// Styled Components

const SearchBarContainer = styled.form`
  display: grid;
  grid-auto-flow: column;
  justify-content: stretch;
  border: 1px solid ${colors.darkBg()};
  background-color: ${colors.whiteIsh()};
  border-radius: 1rem;
  height: auto;
  width: 80vw;
`;

const SearchBarInput = styled.input`
  height: 3rem;
  border: none;
  margin: 0 1rem;
  color: ${colors.darkBg()};
  text-transform: capitalize;
  background-color: ${colors.whiteIsh()};
  font-family: ${fonts.robotoCondensed}, sans-serif;
  font-size: 1.3rem;
  outline: none;
  @media screen and (min-width: 720px) {
    width: 60vw;
  }
`;

const AutoCompleteDropdown = styled.ul`
  border: none;
  background-color: ${colors.whiteIsh()};
  width: 81vw;
  max-height: 20vh;
  overflow: auto;
  z-index: 10;
  position: fixed;
  margin-top: 9.2rem;
  @media screen and (min-width: 720px) {
    margin-top: 10.2rem;
    width: 61vw;
  }
`;

const ClearButton = styled.button`
  border: none;
  outline: none;
  color: ${colors.whiteIsh()};
  background-color: ${colors.darkBg(0.8)};
  border-radius: 0 0.9rem 0.9rem 0;
  padding: 0 0.5rem;
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

const ErrorMessage = styled.p`
  text-align: center;
  z-index: 10;
  margin-top: -1.5rem;
  padding: 1rem;
  color: ${colors.red()};
  background-color: ${colors.whiteIsh(0.1)};
  border-radius: 0.2rem;
  margin-bottom: -2.5rem;
  width: 70vw;
  @media screen and (min-width: 720px) {
    width: 50vw;
  }
`;
