import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form onSubmit={(e) => e.prevent.default()}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={changeHandler}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
