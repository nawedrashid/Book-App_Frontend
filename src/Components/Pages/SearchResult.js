import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { bookContext } from "../Context/BookContext";
import "./SearchResult.css";

const SearchResult = () => {
  const { searchResult } = useContext(bookContext)

  return (
    <div className="container">
      {searchResult.map((data) => {
        return (
          <Link to = {`/book/${data.id}`} style={{textDecoration:"inherit", color:"inherit"}}>
            <div className="card">
              <img
                src={data?.volumeInfo?.imageLinks?.smallThumbnail}
                alt="Avatar"
              />
              <div className="detail">
                <h3>{data?.volumeInfo?.title}</h3>
                <span>By: {data?.volumeInfo?.authors}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;
