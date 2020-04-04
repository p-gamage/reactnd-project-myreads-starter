import React from 'react';
import PropTypes from 'prop-types';
import MoveBook from './MoveBook';

const Book = (props) => {
  const {handleMoveShelf, book} = props;
  const moveShelf = (newShelf) => handleMoveShelf(book.id, newShelf);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        />
        <MoveBook moveShelf={moveShelf} currentShelf={book.shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(' & ')}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  handleMoveShelf: PropTypes.func.isRequired
};

export default Book;
