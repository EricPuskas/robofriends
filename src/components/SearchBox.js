import React from "react";

const SearchBox = ({ searchChange, searchfield }) => {
  return (
    <div>
      <input
        onChange={searchChange}
        className="pa3 ba b--purple bg-lightest-purple ma3"
        type="search"
        placeholder="search robots"
        aria-label="search robots"
      />
    </div>
  );
};

export default SearchBox;
