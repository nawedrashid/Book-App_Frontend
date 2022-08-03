import React, { useContext } from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css";
import { bookContext } from "../Context/BookContext";

const SearchPage = () => {

  const {searchHandler,inputHandler} = useContext(bookContext)

  return (
    <>
      <div className="search_book">
        <p className="search_heading">Search Book</p>
        <div className="input_section">
          <input
            onChange={inputHandler}
            className="input_field"
            placeholder="Enter the book name"
            onKeyPress={searchHandler}
          />
          <button
            className="search_btn"
            name="search"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
      </div>
        <SearchResult />
    </>
  );
};

export default SearchPage;
