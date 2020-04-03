import React from 'react';
import PropTypes from 'prop-types';
import MoveBookButton from './MoveBookButton';

const Book = (props) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${props.book.imageLinks.thumbnail})`
        }}
      />
      <MoveBookButton />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors.join(' & ')}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Book;
