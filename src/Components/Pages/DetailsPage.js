import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bookContext } from "../Context/BookContext";
import './DetailsPage.css'

const DetailsPage = () => {

    const {id} = useParams();
    const { searchResult } = useContext(bookContext)
    const Book = searchResult.filter((book) => book.id === id);
    console.log(Book)
    const {title, subtitle, description, language, pageCount, authors, imageLinks:{thumbnail}} = Book[0].volumeInfo
    
    return(
        <div className="book_details">
            <img className="thumbnail" src={thumbnail} alt="Thumbnail" />
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p><span>By: {authors}</span></p>
            <p><span>Description: </span>{description}</p>
            <p><span>No of Pages: </span>{pageCount}</p>
            <p><span>Language: </span>{language}</p>
        </div>
    )
}

export default DetailsPage;