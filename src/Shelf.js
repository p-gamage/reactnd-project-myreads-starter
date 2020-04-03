import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => (
          <Book key={book.id} book={book} handleMoveShelf={props.handleMoveShelf} />
        ))}
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMoveShelf: PropTypes.func.isRequired
};

export default Shelf;
