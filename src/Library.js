import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import {Link} from 'react-router-dom';

const shelves = ['Currently Reading', 'Want to Read', 'Read'];

const Library = (props) => {
  const formatShelfName = (name) => name.toLowerCase().replace(/\s/g, '');

  const filterBooks = (books, currentShelf) =>
    books.filter((book) => formatShelfName(book.shelf) === formatShelfName(currentShelf));

  const {books, updateShelf} = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              key={formatShelfName(shelf)}
              shelfName={shelf}
              books={filterBooks(books, shelf)}
              handleMoveShelf={updateShelf}
            />
          ))}
        </div>
      </div>
      <Link className="open-search" to="/search">
        Add a book
      </Link>
    </div>
  );
};

Library.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Library;
