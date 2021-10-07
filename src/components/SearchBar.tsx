import { useState } from "react";
import styled from "styled-components";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <SearchBarInput
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

const SearchBarInput = styled.input``;
