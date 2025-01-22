import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, position, or city"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="searchbar"
    />
  );
};

export default SearchBar;
