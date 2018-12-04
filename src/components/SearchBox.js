import React from "react";

const SearchBox = ({ searchChange, searchfield }) => {
  return (
    <div>
      <input
        onChange={searchChange}
        className="pa3 ba b--blue bg-lightest-blue ma3"
        type="search"
        placeholder="search here"
      />
    </div>
  );
};

export default SearchBox;
