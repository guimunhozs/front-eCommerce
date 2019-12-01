import React, { useState } from "react";

type props = {
  filter: string,
  handlePress: any,
}


const Search = (props: props) => {

  const [filter, setFilter] = useState('');

  const handleTextSearch = (value: string) => {
    setFilter(value);
  }

  const handleSearch = (e: any) => {
    if (e.which === 13) {
      props.handlePress(filter);
    }
  }

  const handleClear = () => {
    setFilter('');
    props.handlePress('');
  }

  const showButtonClear = () => {
    return filter.length ? <button id="iconCancel" className="fa fa-times-circle iconSearch" onClick={() => handleClear()} /> : '';
  }

  return (
    <div className="searchSection">
      <i id="iconSearch" className="fa fa-search iconSearch"></i>
      <input className="inputSearch" type="text" placeholder={ filter? filter : 'Produtos' } onChange={e => handleTextSearch(e.target.value)} value={filter} onKeyPress={(e: any) => handleSearch(e)} />
      { showButtonClear() }
    </div>
  );
}

export default Search;