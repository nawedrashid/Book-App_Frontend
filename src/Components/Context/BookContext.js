import axios from "axios";
import React, { useState } from "react";

export const bookContext = React.createContext({
  searchResult: [],
  user: null,
  searchHandler: () => {},
  inputHandler: () => {},
  userHandler: () => {},
});

const BookContext = ({ children }) => {
  const [input, setInput] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [user, setUser] = useState();

  
  const searchHandler = async (e) => {
    try {
      if (e.key === "Enter" || e.target.name === "search") {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDIjF7aPysk9b-OOoW3tLTu78yiq9HIGkY`
        );
        setSearchResult(response.data.items);
      }
    } catch (err) {

      console.log(err.message);
    }
  };

  const inputHandler = (e) => {
        setInput(e.target.value)
  }

  return (
    <bookContext.Provider
      value={{ searchHandler, searchResult, user, inputHandler, setUser }}
    >
      {children}
    </bookContext.Provider>
  );
};

export default BookContext;