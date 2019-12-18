import React, { useState } from "react";

import {
  SearchSection,
  SearchIcon,
  SearchCancel,
  SearchInput
} from "./search.css";

type props = {
  filter: string;
  handlePress: any;
};

enum Keys {
  Enter = 13
}

const Search = (props: props) => {
  const [filter, setFilter] = useState("");

  const handleTextSearch = (value: string) => {
    setFilter(value);
  };

  const handleSearch = (e: any) => {
    if (e.which === Keys.Enter) {
      props.handlePress(filter);
    }
  };

  const handleClear = () => {
    setFilter("");
    props.handlePress("");
  };

  const showButtonClear = () => {
    return filter.length ? (
      <SearchCancel
        className="fa fa-times-circle"
        onClick={() => handleClear()}
      />
    ) : (
      ""
    );
  };

  return (
    <SearchSection>
      <SearchIcon className="fa fa-search"></SearchIcon>
      <SearchInput
        type="text"
        placeholder={filter ? filter : "Produtos"}
        onChange={e => handleTextSearch(e.target.value)}
        value={filter}
        onKeyPress={(e: any) => handleSearch(e)}
      />
      {showButtonClear()}
    </SearchSection>
  );
};

export default Search;
