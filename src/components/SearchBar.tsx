import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher, pokemonListUrl } from "../helpers/data-helpers";
import { PokemonList } from "../types/pokemon-types";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    string[] | undefined
  >([]);
  const { data, error } = useSWR<PokemonList, any>(
    pokemonListUrl("?limit=898"),
    fetcher
  );

  const searchPokeList = (e: ChangeEvent<HTMLInputElement>) => {
    let autoList = data?.results?.filter((item) =>
      item.name.includes(e.target.value)
    );
    let autoListNames = autoList?.map((item) => item.name).sort();
    setSearchInput(e.target.value);

    e.target.value === ""
      ? setAutoCompleteOptions([])
      : setAutoCompleteOptions(autoListNames);
  };

  if (error) throw error;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <SearchBarInput value={searchInput} onChange={searchPokeList} />
      {autoCompleteOptions && (
        <AutoCompleteDropdown>
          {autoCompleteOptions.slice(0, 20).map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </AutoCompleteDropdown>
      )}
    </>
  );
};

const SearchBarInput = styled.input``;

const AutoCompleteDropdown = styled.ul`
  display: grid;
`;
